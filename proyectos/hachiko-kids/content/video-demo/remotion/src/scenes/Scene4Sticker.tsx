import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "../constants";
import { FREDOKA, INTER } from "../fonts";
import { Luna } from "../components/Luna";
import { PhoneScene } from "../components/PhoneFrame";

const StickerScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const floatY = -8 * (0.5 - 0.5 * Math.cos((frame / fps) * Math.PI * 2 / 3));

  // Star pop
  const starScale = spring({ frame, fps, config: { damping: 8, stiffness: 200 } });
  const starOpacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });

  // Rays fade
  const raysOpacity = interpolate(frame, [10, 40, 100, 140], [0, 1, 0.6, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const raysScale = interpolate(frame, [10, 100], [0.5, 1.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Text
  const textOpacity = interpolate(frame, [20, 50], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const textY = interpolate(frame, [20, 50], [16, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Luna entrance
  const lunaOpacity = interpolate(frame, [50, 80], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: C.gray50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 20px",
      }}
    >
      {/* Star badge */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        {/* Rays */}
        <div
          style={{
            position: "absolute",
            width: 140,
            height: 140,
            borderRadius: "50%",
            boxShadow: "0 0 0 10px rgba(255,215,0,0.15), 0 0 0 22px rgba(255,215,0,0.08)",
            opacity: raysOpacity,
            transform: `scale(${raysScale})`,
          }}
        />
        {/* Star */}
        <div
          style={{
            width: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #FFD700, #FFA500)",
            borderRadius: "50%",
            boxShadow: "0 8px 32px rgba(255,165,0,0.5)",
            fontSize: 48,
            transform: `scale(${starScale})`,
            opacity: starOpacity,
          }}
        >
          ⭐
        </div>
      </div>

      {/* Text */}
      <div
        style={{
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            fontFamily: FREDOKA,
            fontSize: 28,
            fontWeight: 700,
            color: C.dark,
            marginBottom: 6,
          }}
        >
          ¡Ganaste tu estrella!
        </div>
        <div
          style={{
            fontFamily: INTER,
            fontSize: 14,
            color: C.gray500,
          }}
        >
          Hoy hiciste algo muy especial con Luna
        </div>
      </div>

      {/* Luna */}
      <div
        style={{
          opacity: lunaOpacity,
          transform: `translateY(${floatY}px)`,
          marginBottom: 16,
        }}
      >
        <Luna mood="happy" color="purple" size={100} />
      </div>

      {/* Badge: sin pantallas infinitas */}
      <div
        style={{
          opacity: interpolate(frame, [100, 130], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          background: C.purple50,
          borderRadius: 50,
          padding: "8px 20px",
          fontFamily: FREDOKA,
          fontSize: 13,
          fontWeight: 700,
          color: C.purple700,
          marginBottom: 16,
        }}
      >
        Sin pantallas infinitas
      </div>

      {/* Button */}
      <div
        style={{
          width: "100%",
          padding: "15px",
          background: C.purple500,
          borderRadius: 50,
          fontFamily: FREDOKA,
          fontSize: 16,
          fontWeight: 700,
          color: C.white,
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(123,97,255,0.4)",
        }}
      >
        Volver con Luna
      </div>
    </div>
  );
};

export const Scene4Sticker: React.FC = () => {
  const frame = useCurrentFrame();


  // Transition text
  const transitionOpacity = interpolate(
    frame,
    [80, 100, 170, 200],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill>
      <PhoneScene>
        <StickerScreen />
      </PhoneScene>

      {/* Transition caption */}
      <div
        style={{
          position: "absolute",
          bottom: 56,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: transitionOpacity,
        }}
      >
        <div
          style={{
            fontFamily: FREDOKA,
            fontSize: 32,
            fontWeight: 600,
            color: C.white,
          }}
        >
          Una estrella. Y se acabó por hoy.
        </div>
        <div
          style={{
            fontFamily: INTER,
            fontSize: 22,
            color: C.purple200,
            marginTop: 8,
          }}
        >
          Cada lunes, mamá o papá reciben el resumen →
        </div>
      </div>
    </AbsoluteFill>
  );
};
