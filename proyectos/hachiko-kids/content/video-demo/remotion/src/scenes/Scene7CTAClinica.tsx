import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import QRCode from "react-qr-code";
import { C } from "../constants";
import { FREDOKA, INTER } from "../fonts";
import { Luna } from "../components/Luna";

export const Scene7CTAClinica: React.FC<{ contactEmail: string; formUrl: string }> = ({
  contactEmail,
  formUrl,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Luna float
  const floatY = -8 * (0.5 - 0.5 * Math.cos((frame / fps) * Math.PI * 2 / 3));

  // Logo entrance
  const logoScale = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const logoOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // Tagline clínica
  const tagOpacity = interpolate(frame, [170, 200], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tagY = interpolate(frame, [170, 200], [16, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Badge "buscamos centros piloto"
  const pilotOpacity = interpolate(frame, [25, 50], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Propuesta de valor + email
  const emailOpacity = interpolate(frame, [110, 140], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const emailY = interpolate(frame, [110, 140], [16, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Luna
  const lunaOpacity = interpolate(frame, [60, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lunaScale = spring({
    frame: Math.max(0, frame - 60),
    fps,
    config: { damping: 10, stiffness: 140 },
  });

  // Beneficios del centro
  const beneficiosOpacity = interpolate(frame, [260, 300], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // QR formulario colaboración
  const qrOpacity = interpolate(frame, [280, 320], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const qrScale = spring({
    frame: Math.max(0, frame - 280),
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const BENEFICIOS = [
    "Acceso gratuito durante el piloto",
    "Dashboard clínico con datos conductuales",
    "Co-autoría en publicación de resultados",
  ];

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
      {/* Columna izquierda */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
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

        {/* Tagline clínica */}
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
              fontSize: 26,
              color: C.purple200,
              lineHeight: 1.4,
            }}
          >
            Datos conductuales continuos para tu equipo clínico.
          </div>
        </div>

        {/* Badge buscamos centros */}
        <div
          style={{
            opacity: pilotOpacity,
            background: "rgba(52,211,153,0.12)",
            borderRadius: 50,
            padding: "10px 32px",
            fontFamily: FREDOKA,
            fontSize: 22,
            fontWeight: 600,
            color: C.mint300,
            marginBottom: 20,
            border: "1px solid rgba(52,211,153,0.3)",
          }}
        >
          Buscamos centros piloto — cupos limitados
        </div>

        {/* CTA email */}
        <div
          style={{
            opacity: emailOpacity,
            transform: `translateY(${emailY}px)`,
            marginBottom: 24,
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
            ¿Quieres colaborar con nosotros?
          </div>
          <div
            style={{
              fontFamily: FREDOKA,
              fontSize: 28,
              fontWeight: 600,
              color: C.white,
              background: "rgba(52,211,153,0.15)",
              padding: "12px 36px",
              borderRadius: 50,
              border: "1px solid rgba(52,211,153,0.4)",
            }}
          >
            {contactEmail}
          </div>
        </div>

        {/* Beneficios */}
        <div
          style={{
            opacity: beneficiosOpacity,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {BENEFICIOS.map((b, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontFamily: INTER,
                fontSize: 18,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: C.mint500,
                  flexShrink: 0,
                }}
              />
              {b}
            </div>
          ))}
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
          <Luna mood="happy" color="green" size={160} />
        </div>

        {/* QR formulario */}
        <div
          style={{
            opacity: qrOpacity,
            transform: `scale(${qrScale})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            background: "rgba(52,211,153,0.07)",
            border: "1px solid rgba(52,211,153,0.2)",
            borderRadius: 24,
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              fontFamily: FREDOKA,
              fontSize: 16,
              fontWeight: 600,
              color: C.mint300,
              textAlign: "center",
            }}
          >
            Formulario de colaboración
          </div>

          <div
            style={{
              background: C.white,
              borderRadius: 12,
              padding: 10,
            }}
          >
            <QRCode value={formUrl} size={140} fgColor={C.dark} bgColor={C.white} />
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
            Escanea para expresar tu interés
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
