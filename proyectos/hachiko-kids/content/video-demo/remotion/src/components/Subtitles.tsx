import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  AbsoluteFill,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  delayRender,
  continueRender,
} from "remotion";
import { parseSrt, createTikTokStyleCaptions } from "@remotion/captions";
import type { Caption, TikTokPage } from "@remotion/captions";
import { INTER } from "../fonts";

// Tiempo máximo por "página" de subtítulo — ajustado al ritmo de la voz
const SWITCH_EVERY_MS = 2500;

const CaptionPage: React.FC<{ page: TikTokPage }> = ({ page }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  // frame es local a la Sequence; lo sumamos al startMs de la página para
  // obtener el tiempo absoluto y destacar la palabra correcta.
  const absoluteTimeMs = page.startMs + (frame / fps) * 1000;

  return (
    <div
      style={{
        display: "inline-block",
        background: "rgba(0,0,0,0.55)",
        borderRadius: 14,
        padding: "10px 28px",
        maxWidth: 1100,
        textAlign: "center",
        backdropFilter: "blur(4px)",
      }}
    >
      <span
        style={{
          fontFamily: INTER,
          fontSize: 42,
          fontWeight: 600,
          lineHeight: 1.35,
          whiteSpace: "pre",
        }}
      >
        {page.tokens.map((token) => {
          const isActive =
            token.fromMs <= absoluteTimeMs && token.toMs > absoluteTimeMs;
          return (
            <span
              key={token.fromMs}
              style={{
                color: isActive ? "#C4B5FD" : "rgba(255,255,255,0.9)",
              }}
            >
              {token.text}
            </span>
          );
        })}
      </span>
    </div>
  );
};

interface SubtitlesProps {
  audioDelayFrames: number;
}

export const Subtitles: React.FC<SubtitlesProps> = ({ audioDelayFrames }) => {
  const [captions, setCaptions] = useState<Caption[] | null>(null);
  const { fps } = useVideoConfig();
  const [handle] = useState(() => delayRender("Cargando subtítulos SRT"));

  const fetchCaptions = useCallback(async () => {
    try {
      const response = await fetch(staticFile("v1_speach_spa.srt"));
      const text = await response.text();
      const { captions: parsed } = parseSrt({ input: text });
      setCaptions(parsed);
      continueRender(handle);
    } catch (e) {
      console.error("Error cargando SRT:", e);
      continueRender(handle);
    }
  }, [handle]);

  useEffect(() => {
    fetchCaptions();
  }, [fetchCaptions]);

  const pages = useMemo(() => {
    if (!captions) return [];
    const { pages } = createTikTokStyleCaptions({
      captions,
      combineTokensWithinMilliseconds: SWITCH_EVERY_MS,
    });
    return pages;
  }, [captions]);

  if (!captions) return null;

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {pages.map((page, index) => {
        const nextPage = pages[index + 1] ?? null;

        // startFrame en el timeline global = delay del audio + timestamp del SRT
        const startFrame =
          audioDelayFrames + Math.round((page.startMs / 1000) * fps);

        const endFrame = Math.min(
          nextPage
            ? audioDelayFrames + Math.round((nextPage.startMs / 1000) * fps)
            : Infinity,
          startFrame + Math.round((SWITCH_EVERY_MS / 1000) * fps)
        );

        const durationInFrames = endFrame - startFrame;
        if (durationInFrames <= 0) return null;

        return (
          <Sequence
            key={index}
            from={startFrame}
            durationInFrames={durationInFrames}
            layout="none"
          >
            <div
              style={{
                position: "absolute",
                bottom: 36,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CaptionPage page={page} />
            </div>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
