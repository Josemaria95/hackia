import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "../constants";
import { FREDOKA, INTER } from "../fonts";
import { Luna } from "../components/Luna";
import { PhoneScene } from "../components/PhoneFrame";

const COLORS: Array<{ key: string; bg: string }> = [
  { key: "purple", bg: "#7B61FF" },
  { key: "blue", bg: "#60A5FA" },
  { key: "green", bg: "#34D399" },
  { key: "pink", bg: "#F472B6" },
  { key: "orange", bg: "#F97316" },
];

const SelectMascotScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const floatY = -8 * (0.5 - 0.5 * Math.cos((frame / fps) * Math.PI * 2 / 3));

  // Entrance
  const enterOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const enterY = interpolate(frame, [0, 20], [20, 0], { extrapolateRight: "clamp" });

  // Luna glow pulse
  const glowOpacity = 0.45 + 0.1 * Math.sin((frame / fps) * Math.PI * 2 / 2);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: C.cream,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "28px 24px 20px",
        opacity: enterOpacity,
      }}
    >
      {/* Title */}
      <div style={{ transform: `translateY(${enterY}px)` }}>
        <div
          style={{
            fontFamily: FREDOKA,
            fontSize: 22,
            fontWeight: 700,
            color: C.dark,
            textAlign: "center",
            marginBottom: 4,
          }}
        >
          Conoce a Luna
        </div>
        <div
          style={{
            fontFamily: INTER,
            fontSize: 13,
            color: C.gray500,
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Tu nueva compañera
        </div>
      </div>

      {/* Luna with glow */}
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
        <div
          style={{
            position: "absolute",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "radial-gradient(circle, #C4BCFF 0%, transparent 70%)",
            opacity: glowOpacity,
            filter: "blur(20px)",
          }}
        />
        <div style={{ transform: `translateY(${floatY}px)`, position: "relative", zIndex: 1 }}>
          <Luna mood="happy" color="purple" size={140} />
        </div>
      </div>

      {/* Color picker label */}
      <div
        style={{
          fontFamily: INTER,
          fontSize: 11,
          fontWeight: 700,
          color: C.gray500,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: 10,
        }}
      >
        Elige el color de Luna
      </div>

      {/* Color circles */}
      <div style={{ display: "flex", gap: 14, marginBottom: 18 }}>
        {COLORS.map((c, i) => (
          <div
            key={c.key}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: c.bg,
              border: c.key === "purple" ? `3px solid ${C.dark}` : "3px solid transparent",
              transform: c.key === "purple" ? "scale(1.18)" : "scale(1)",
              boxShadow: c.key === "purple" ? "0 4px 12px rgba(0,0,0,0.25)" : "0 2px 6px rgba(0,0,0,0.12)",
            }}
          />
        ))}
      </div>

      {/* Name label */}
      <div
        style={{
          fontFamily: FREDOKA,
          fontSize: 15,
          fontWeight: 600,
          color: C.gray700,
          textAlign: "left",
          width: "100%",
          marginBottom: 8,
        }}
      >
        ¿Cómo quieres llamarla?
      </div>

      {/* Name input */}
      <div
        style={{
          width: "100%",
          border: `2px solid ${C.purple500}`,
          borderRadius: 14,
          padding: "14px 18px",
          fontFamily: FREDOKA,
          fontSize: 20,
          fontWeight: 600,
          color: C.dark,
          textAlign: "center",
          background: C.white,
          boxShadow: `0 0 0 3px rgba(123,97,255,0.12)`,
          marginBottom: 20,
        }}
      >
        Luna
      </div>

      {/* Button */}
      <div
        style={{
          width: "100%",
          padding: "16px",
          background: C.purple500,
          borderRadius: 50,
          fontFamily: FREDOKA,
          fontSize: 17,
          fontWeight: 700,
          color: C.white,
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(123,97,255,0.4)",
        }}
      >
        ¡Comenzar!
      </div>
    </div>
  );
};

export const Scene2Mascot: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();


  // Caption
  const captionOpacity = interpolate(frame, [30, 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <PhoneScene phoneBackground={C.cream}>
        <SelectMascotScreen />
      </PhoneScene>

      {/* Caption */}
      <div
        style={{
          position: "absolute",
          bottom: 70,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: captionOpacity,
        }}
      >
        <div
          style={{
            fontFamily: FREDOKA,
            fontSize: 36,
            fontWeight: 600,
            color: C.white,
          }}
        >
          Esta es Luna. La mascota de Sofía.
        </div>
        <div
          style={{
            fontFamily: INTER,
            fontSize: 22,
            color: C.purple200,
            marginTop: 6,
          }}
        >
          Cada día, Sofía toma decisiones por Luna.
          {" "}Y cada decisión revela un patrón.
        </div>
      </div>
    </AbsoluteFill>
  );
};
