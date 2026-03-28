import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { C, FPS } from "../constants";
import { FREDOKA, INTER } from "../fonts";
import { Luna } from "../components/Luna";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Luna float animation
  const floatY = -8 * (0.5 - 0.5 * Math.cos((frame / fps) * Math.PI * 2 / 3));

  // Logo entrance
  const logoScale = spring({ frame, fps, config: { damping: 14, stiffness: 120 } });
  const logoOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // Tagline (under logo)
  const tagOpacity = interpolate(frame, [40, 70], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tagY = interpolate(frame, [40, 70], [16, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Stat 1 — line 1 (SRT 1 arranca en frame ~130)
  const stat1Line1Opacity = interpolate(frame, [125, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const stat1Line1Y = interpolate(frame, [125, 150], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Stat 1 — line 2 (continuación de SRT 1)
  const stat1Line2Opacity = interpolate(frame, [190, 215], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const stat1Line2Y = interpolate(frame, [190, 215], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Stat 2 (SRT 2 arranca en frame ~276)
  const stat2Opacity = interpolate(frame, [270, 300], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const stat2Y = interpolate(frame, [270, 300], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Stat 2 — second line (SRT 3 arranca en frame ~372)
  const stat2Line2Opacity = interpolate(frame, [365, 395], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });


  // Show stats after logo phase (frame > 120)
  const showStats = frame > 120;

  return (
    <AbsoluteFill
      style={{
        background: C.dark,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!showStats && (
        <>
          {/* Luna mascot */}
          <div
            style={{
              transform: `scale(${logoScale}) translateY(${floatY}px)`,
              opacity: logoOpacity,
              marginBottom: 24,
            }}
          >
            <Luna mood="happy" color="purple" size={180} />
          </div>

          {/* Logo */}
          <div
            style={{
              transform: `scale(${logoScale})`,
              opacity: logoOpacity,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: FREDOKA,
                fontSize: 80,
                fontWeight: 700,
                color: C.white,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Hachiko Kids
            </div>
            <div
              style={{
                opacity: tagOpacity,
                transform: `translateY(${tagY}px)`,
                fontFamily: INTER,
                fontSize: 26,
                color: C.purple200,
                marginTop: 8,
              }}
            >
              Tu mascota te entiende
            </div>
          </div>
        </>
      )}

      {showStats && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 48,
            maxWidth: 900,
            textAlign: "center",
            padding: "0 48px",
          }}
        >
          {/* Stat 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                opacity: stat1Line1Opacity,
                transform: `translateY(${stat1Line1Y}px)`,
                fontFamily: FREDOKA,
                fontSize: 72,
                fontWeight: 700,
                color: C.white,
                lineHeight: 1.1,
              }}
            >
              1 de cada 4 niños
            </div>
            <div
              style={{
                opacity: stat1Line2Opacity,
                transform: `translateY(${stat1Line2Y}px)`,
                fontFamily: FREDOKA,
                fontSize: 56,
                fontWeight: 500,
                color: C.purple200,
                lineHeight: 1.2,
              }}
            >
              tiene dificultades emocionales
            </div>
          </div>

          {/* Stat 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                opacity: stat2Opacity,
                transform: `translateY(${stat2Y}px)`,
                fontFamily: FREDOKA,
                fontSize: 56,
                fontWeight: 600,
                color: C.purple300,
                lineHeight: 1.2,
              }}
            >
              Y los padres no siempre saben por qué
            </div>
            <div
              style={{
                opacity: stat2Line2Opacity,
                fontFamily: INTER,
                fontSize: 30,
                color: "rgba(255,255,255,0.5)",
                marginTop: 8,
              }}
            >
              Lista de espera para atención: 3 a 6 meses
            </div>
          </div>

          {/* Hachiko badge */}
          <div
            style={{
              opacity: interpolate(frame, [490, 520], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              background: C.purple500,
              borderRadius: 50,
              padding: "14px 40px",
              fontFamily: FREDOKA,
              fontSize: 32,
              fontWeight: 700,
              color: C.white,
            }}
          >
            Hachiko Kids cambia eso.
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
