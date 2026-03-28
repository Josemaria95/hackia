import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "../constants";
import { FREDOKA, INTER } from "../fonts";

const COMPETITORS = [
  { name: "Finch", gaps: ["Solo adultos", "Sin B2B", "Sin datos clínicos"] },
  { name: "Mightier", gaps: ["Hardware caro", "Solo inglés", "Solo USA"] },
  { name: "Breathe Think Do", gaps: ["Sin datos continuos", "Sin dashboard padre", "Solo inglés"] },
  { name: "Luca (Chile)", gaps: ["Solo académico", "No emocional", "Sin mascota"] },
];

const HACHIKO_FEATURES = [
  "Mascota gamificada 🐱",
  "Dashboard para padres 📊",
  "Canal clínico B2B 🏥",
  "Español + LATAM 🌎",
  "Datos conductuales 📈",
];

export const Scene6Comparison: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();


  // Title entrance
  const titleOpacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, 25], [24, 0], { extrapolateRight: "clamp" });

  // Competitor rows stagger (Finch@f61, Mightier@f129, Breathe@f200, Luca@f339)
  const ROW_DELAYS = [40, 120, 190, 330];
  const rowDelay = (i: number) => ROW_DELAYS[i];
  const rowOpacity = (i: number) =>
    interpolate(frame, [rowDelay(i), rowDelay(i) + 25], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  const rowX = (i: number) =>
    interpolate(frame, [rowDelay(i), rowDelay(i) + 25], [-30, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

  // Hachiko row highlight (SRT 26 "Nadie más" en frame ~411)
  const hachikoOpacity = interpolate(frame, [400, 430], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const hachikoScale = spring({
    frame: Math.max(0, frame - 400),
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  // Final tagline (SRT 27 "Todo junto" en frame ~569)
  const tagOpacity = interpolate(frame, [570, 610], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: C.dark,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 120px",
        }}
    >
      {/* Title */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          textAlign: "center",
          marginBottom: 48,
        }}
      >
        <div
          style={{
            fontFamily: FREDOKA,
            fontSize: 52,
            fontWeight: 700,
            color: C.white,
            lineHeight: 1.1,
          }}
        >
          Nadie más combina todo esto en español para LATAM
        </div>
      </div>

      {/* Comparison table */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: 12,
          width: "100%",
          maxWidth: 1200,
          marginBottom: 40,
        }}
      >
        {/* Header */}
        <div
          style={{
            fontFamily: INTER,
            fontSize: 14,
            fontWeight: 700,
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            display: "flex",
            alignItems: "center",
            paddingLeft: 16,
          }}
        >
          Competidor
        </div>
        <div
          style={{
            fontFamily: INTER,
            fontSize: 14,
            fontWeight: 700,
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            display: "flex",
            alignItems: "center",
            paddingLeft: 16,
          }}
        >
          Qué le falta
        </div>

        {/* Competitor rows */}
        {COMPETITORS.map((comp, i) => (
          <React.Fragment key={comp.name}>
            <div
              style={{
                opacity: rowOpacity(i),
                transform: `translateX(${rowX(i)}px)`,
                background: "rgba(255,255,255,0.06)",
                borderRadius: "14px 0 0 14px",
                padding: "12px 16px",
                fontFamily: FREDOKA,
                fontSize: 18,
                fontWeight: 600,
                color: "rgba(255,255,255,0.7)",
                display: "flex",
                alignItems: "center",
              }}
            >
              {comp.name}
            </div>
            <div
              style={{
                opacity: rowOpacity(i),
                transform: `translateX(${rowX(i)}px)`,
                background: "rgba(255,255,255,0.04)",
                borderRadius: "0 14px 14px 0",
                padding: "12px 16px",
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {comp.gaps.map((gap) => (
                <span
                  key={gap}
                  style={{
                    fontFamily: INTER,
                    fontSize: 14,
                    color: "rgba(255,255,255,0.45)",
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 50,
                    padding: "4px 12px",
                  }}
                >
                  {gap}
                </span>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Hachiko row */}
      <div
        style={{
          opacity: hachikoOpacity,
          transform: `scale(${hachikoScale})`,
          background: `linear-gradient(135deg, ${C.purple500} 0%, ${C.purple700} 100%)`,
          borderRadius: 20,
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          gap: 24,
          width: "100%",
          maxWidth: 1200,
          boxShadow: "0 12px 40px rgba(123,97,255,0.4)",
        }}
      >
        <div
          style={{
            fontFamily: FREDOKA,
            fontSize: 26,
            fontWeight: 700,
            color: C.white,
            whiteSpace: "nowrap",
          }}
        >
          Hachiko Kids ✓
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {HACHIKO_FEATURES.map((feat) => (
            <span
              key={feat}
              style={{
                fontFamily: INTER,
                fontSize: 15,
                color: C.white,
                background: "rgba(255,255,255,0.2)",
                borderRadius: 50,
                padding: "5px 14px",
                fontWeight: 500,
              }}
            >
              {feat}
            </span>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <div
        style={{
          opacity: tagOpacity,
          marginTop: 28,
          fontFamily: FREDOKA,
          fontSize: 32,
          fontWeight: 700,
          color: C.purple200,
          textAlign: "center",
        }}
      >
        Todo junto. En español.
      </div>
    </AbsoluteFill>
  );
};
