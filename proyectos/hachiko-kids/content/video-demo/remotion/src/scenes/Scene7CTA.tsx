import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import QRCode from "react-qr-code";
import { C } from "../constants";
import { FREDOKA, INTER } from "../fonts";
import { Luna } from "../components/Luna";

export const Scene7CTA: React.FC<{ contactEmail: string; pilotCount: number; apkUrl: string }> = ({
  contactEmail,
  pilotCount,
  apkUrl,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Luna float
  const floatY = -8 * (0.5 - 0.5 * Math.cos((frame / fps) * Math.PI * 2 / 3));

  // Logo entrance
  const logoScale = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const logoOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // Tagline (voz lo dice en frame 188)
  const tagOpacity = interpolate(frame, [170, 200], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tagY = interpolate(frame, [170, 200], [16, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Pilot info (voz lo dice desde frame 10)
  const pilotOpacity = interpolate(frame, [25, 50], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Email (voz "¿Quieres verlo?" en frame 131)
  const emailOpacity = interpolate(frame, [110, 140], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const emailY = interpolate(frame, [110, 140], [16, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Luna (aparece entre piloto y email)
  const lunaOpacity = interpolate(frame, [60, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lunaScale = spring({
    frame: Math.max(0, frame - 60),
    fps,
    config: { damping: 10, stiffness: 140 },
  });

  // Final tagline (después de que termina la voz)
  const finalTagOpacity = interpolate(frame, [260, 300], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // QR + download block (aparece junto al final tagline)
  const qrOpacity = interpolate(frame, [280, 320], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const qrScale = spring({
    frame: Math.max(0, frame - 280),
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  return (
    <AbsoluteFill
      style={{
        background: C.dark,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 80,
      }}
    >
      {/* Columna izquierda: logo + taglines + piloto + email */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 0,
          flex: 1,
          maxWidth: 820,
          paddingLeft: 80,
        }}
      >
        {/* Logo */}
        <div
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              fontFamily: FREDOKA,
              fontSize: 72,
              fontWeight: 700,
              color: C.white,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            Hachiko Kids
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            opacity: tagOpacity,
            transform: `translateY(${tagY}px)`,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              fontFamily: INTER,
              fontSize: 28,
              color: C.purple200,
              lineHeight: 1.4,
            }}
          >
            Entiende a tu hijo a través de su mascota.
          </div>
        </div>

        {/* Pilot info */}
        <div
          style={{
            opacity: pilotOpacity,
            background: "rgba(123,97,255,0.15)",
            borderRadius: 50,
            padding: "10px 32px",
            fontFamily: FREDOKA,
            fontSize: 22,
            fontWeight: 600,
            color: C.purple200,
            marginBottom: 20,
            border: "1px solid rgba(123,97,255,0.3)",
          }}
        >
          Estamos en piloto — {pilotCount} familias
        </div>

        {/* Email */}
        <div
          style={{
            opacity: emailOpacity,
            transform: `translateY(${emailY}px)`,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontFamily: INTER,
              fontSize: 18,
              color: "rgba(255,255,255,0.5)",
              marginBottom: 8,
            }}
          >
            ¿Quieres verlo en acción?
          </div>
          <div
            style={{
              fontFamily: FREDOKA,
              fontSize: 30,
              fontWeight: 600,
              color: C.white,
              background: "rgba(123,97,255,0.2)",
              padding: "12px 36px",
              borderRadius: 50,
              border: `1px solid ${C.purple500}`,
            }}
          >
            {contactEmail}
          </div>
        </div>

        {/* Final tagline */}
        <div
          style={{
            opacity: finalTagOpacity,
            fontFamily: FREDOKA,
            fontSize: 26,
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Mascota · Datos · Dashboard · Español
        </div>
      </div>

      {/* Columna derecha: Luna + QR */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          paddingRight: 80,
        }}
      >
        {/* Luna */}
        <div
          style={{
            opacity: lunaOpacity,
            transform: `scale(${lunaScale}) translateY(${floatY}px)`,
          }}
        >
          <Luna mood="happy" color="purple" size={160} />
        </div>

        {/* QR + CTA descarga */}
        <div
          style={{
            opacity: qrOpacity,
            transform: `scale(${qrScale})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 24,
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              fontFamily: FREDOKA,
              fontSize: 16,
              fontWeight: 600,
              color: C.purple200,
              textAlign: "center",
            }}
          >
            Descarga la app beta
          </div>

          {/* QR con fondo blanco */}
          <div
            style={{
              background: C.white,
              borderRadius: 12,
              padding: 10,
            }}
          >
            <QRCode value={apkUrl} size={140} fgColor={C.dark} bgColor={C.white} />
          </div>

          <div
            style={{
              fontFamily: INTER,
              fontSize: 13,
              color: "rgba(255,255,255,0.4)",
              textAlign: "center",
              maxWidth: 180,
              lineHeight: 1.4,
            }}
          >
            Escanea con tu Android
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
