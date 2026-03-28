import React from "react";
import { z } from "zod";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Mascot } from "./scenes/Scene2Mascot";
import { Scene3Checkin } from "./scenes/Scene3Checkin";
import { Scene4Sticker } from "./scenes/Scene4Sticker";
import { Scene5Dashboard } from "./scenes/Scene5Dashboard";
import { Scene6Comparison } from "./scenes/Scene6Comparison";
import { Scene7CTA } from "./scenes/Scene7CTA";
import { Subtitles } from "./components/Subtitles";
import { AUDIO_DELAY_FRAMES } from "./constants";

export const videoSchema = z.object({
  contactEmail: z.string(),
  pilotCount: z.number().int().min(1),
  apkUrl: z.string(),
});

// 6 transitions × 20 frames = 120 frames overlap
// Total: 590+278+686+211+576+692+567 - 120 = 3480 frames ≈ 1:56
const T = linearTiming({ durationInFrames: 20 });

export const HachikoKidsVideo: React.FC<z.infer<typeof videoSchema>> = ({
  contactEmail,
  pilotCount,
  apkUrl,
}) => {
  return (
    <AbsoluteFill>
      <Sequence from={AUDIO_DELAY_FRAMES} layout="none">
        <Audio src={staticFile("v1_speach.mp3")} />
      </Sequence>
      <Subtitles audioDelayFrames={AUDIO_DELAY_FRAMES} />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={590}>
          <Scene1Hook />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />
        <TransitionSeries.Sequence durationInFrames={278}>
          <Scene2Mascot />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />
        <TransitionSeries.Sequence durationInFrames={686}>
          <Scene3Checkin />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />
        <TransitionSeries.Sequence durationInFrames={211}>
          <Scene4Sticker />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />
        <TransitionSeries.Sequence durationInFrames={576}>
          <Scene5Dashboard />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />
        <TransitionSeries.Sequence durationInFrames={692}>
          <Scene6Comparison />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T} />
        <TransitionSeries.Sequence durationInFrames={567}>
          <Scene7CTA contactEmail={contactEmail} pilotCount={pilotCount} apkUrl={apkUrl} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
