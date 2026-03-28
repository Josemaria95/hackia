import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { C } from "../constants";
import { FREDOKA, INTER } from "../fonts";
import { PhoneScene } from "../components/PhoneFrame";

const DIMENSIONS = [
  { id: "IN", label: "Seguimiento de instrucciones", sub: "Ayudó 3/5 veces", color: C.purple500 },
  { id: "SO", label: "Socialización", sub: "Con amigos 4/5 días", color: C.mint500 },
  { id: "PR", label: "Conducta prosocial", sub: "Compartió 3/5 veces", color: C.mint700 },
  { id: "RE", label: "Regulación emocional", sub: "Eligió regular 2/5 veces", color: C.purple300 },
  { id: "AN", label: "Ánimo general", sub: "Estable esta semana", color: C.orange500 },
];

const MOOD_DAYS = [
  { label: "L", color: "#FCA5A5" }, // rojo (lunes difícil)
  { label: "M", color: "#FCD34D" },
  { label: "X", color: C.mint300 },
  { label: "J", color: C.mint500 },
  { label: "V", color: C.mint300 },
];

const DashboardScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scroll simulation: from frame 170 to 480, scroll down 280px
  const scrollY = interpolate(
    frame,
    [170, 480],
    [0, -280],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Stagger entrances
  const headerOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const insightOpacity = interpolate(frame, [15, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cardsOpacity = interpolate(frame, [30, 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Open socialización card at frame 280
  const soOpen = frame > 280;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: C.white,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          transform: `translateY(${scrollY}px)`,
          padding: "16px 16px 100px",
        }}
      >
        {/* Header */}
        <div style={{ opacity: headerOpacity, marginBottom: 12 }}>
          <div
            style={{
              fontFamily: INTER,
              fontSize: 12,
              color: C.purple500,
              fontWeight: 600,
              cursor: "pointer",
              marginBottom: 8,
            }}
          >
            ← Volver con Luna
          </div>
          <div
            style={{
              fontFamily: FREDOKA,
              fontSize: 24,
              fontWeight: 700,
              color: C.dark,
            }}
          >
            Resumen semanal
          </div>
          <div
            style={{
              fontFamily: INTER,
              fontSize: 12,
              color: C.gray500,
              marginBottom: 8,
            }}
          >
            Sofía · 7 años
          </div>

          {/* Week nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              marginBottom: 4,
            }}
          >
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.gray100, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: C.gray700 }}>◀</div>
            <span style={{ fontFamily: INTER, fontSize: 13, fontWeight: 600, color: C.gray700 }}>20/3 — 26/3</span>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.gray100, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: C.gray300 }}>▶</div>
          </div>

          <div
            style={{
              fontFamily: INTER,
              fontSize: 13,
              color: C.gray500,
              textAlign: "center",
              marginBottom: 8,
            }}
          >
            <strong style={{ color: C.purple700 }}>Días activos: 4/7</strong>
          </div>
        </div>

        {/* Insight cards */}
        <div style={{ opacity: insightOpacity }}>
          {/* Dato */}
          <div
            style={{
              background: C.white,
              borderRadius: 14,
              padding: "12px 14px",
              borderLeft: `4px solid ${C.red500}`,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              marginBottom: 8,
            }}
          >
            <div
              style={{
                fontFamily: INTER,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: C.red500,
                marginBottom: 4,
              }}
            >
              ! Dato de la semana
            </div>
            <div
              style={{
                fontFamily: INTER,
                fontSize: 13,
                color: C.gray700,
                lineHeight: 1.45,
              }}
            >
              Los lunes parecen más difíciles emocionalmente para Sofía.
            </div>
          </div>

          {/* Acción */}
          <div
            style={{
              background: C.white,
              borderRadius: 14,
              padding: "12px 14px",
              borderLeft: `4px solid ${C.mint500}`,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              marginBottom: 12,
            }}
          >
            <div
              style={{
                fontFamily: INTER,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: C.mint700,
                marginBottom: 4,
              }}
            >
              ✓ Qué puedes hacer
            </div>
            <div
              style={{
                fontFamily: INTER,
                fontSize: 13,
                color: C.gray700,
                lineHeight: 1.45,
              }}
            >
              Intenta un ritual de despedida especial antes del colegio los lunes.
            </div>
          </div>
        </div>

        {/* Section label */}
        <div
          style={{
            fontFamily: INTER,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: C.gray300,
            marginBottom: 8,
          }}
        >
          Detalle por dimensión
        </div>

        {/* Dimension cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6, opacity: cardsOpacity }}>
          {DIMENSIONS.map((d) => {
            const isOpen = soOpen && d.id === "SO";
            return (
              <div
                key={d.id}
                style={{
                  background: C.white,
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "12px 14px",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 9,
                      background: d.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: FREDOKA,
                      fontSize: 12,
                      fontWeight: 700,
                      color: C.white,
                      flexShrink: 0,
                    }}
                  >
                    {d.id}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: FREDOKA,
                        fontSize: 14,
                        fontWeight: 600,
                        color: C.dark,
                      }}
                    >
                      {d.label}
                    </div>
                    <div
                      style={{
                        fontFamily: INTER,
                        fontSize: 11,
                        color: C.gray500,
                        marginTop: 1,
                      }}
                    >
                      {d.sub}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: C.gray300,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▾
                  </div>
                </div>

                {/* Expanded: only SO */}
                {isOpen && (
                  <div
                    style={{
                      padding: "0 14px 12px",
                      borderTop: `1px solid ${C.gray100}`,
                      paddingTop: 10,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: INTER,
                        fontSize: 12,
                        color: C.gray500,
                        lineHeight: 1.55,
                        marginBottom: 8,
                      }}
                    >
                      Muy buena semana social. Sofía buscó activamente la
                      compañía de otros y mostró iniciativa para proponer juegos en grupo.
                    </div>
                    <div
                      style={{
                        fontFamily: INTER,
                        fontSize: 12,
                        color: C.gray700,
                        fontWeight: 500,
                      }}
                    >
                      <strong>Tip:</strong> Refuerza sus habilidades sociales nombrando lo positivo: "Qué bien que incluiste a tu hermano".
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mood timeline */}
        <div
          style={{
            opacity: cardsOpacity,
            marginTop: 16,
          }}
        >
          <div
            style={{
              fontFamily: INTER,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: C.gray300,
              marginBottom: 10,
            }}
          >
            Ánimo por día
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            {MOOD_DAYS.map((day) => (
              <div
                key={day.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: day.color,
                  }}
                />
                <span
                  style={{
                    fontFamily: INTER,
                    fontSize: 10,
                    color: C.gray500,
                  }}
                >
                  {day.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Scene5Dashboard: React.FC = () => {
  const frame = useCurrentFrame();


  // Dynamic caption based on scroll progress
  const captionPhase = interpolate(frame, [0, 80, 180, 370, 576], [0, 0, 1, 2, 3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const captions = [
    "Dato + tip concreto, arriba. Visible sin scrollear.",
    "5 dimensiones de comportamiento. Patrones, no diagnósticos.",
    "Ánimo día a día. ¿Los lunes son difíciles? Aquí lo ves.",
  ];

  const captionIdx = Math.min(Math.round(captionPhase), 2);
  const captionOpacity =
    interpolate(frame, [40, 70], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) *
    interpolate(frame, [540, 576], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <PhoneScene>
        <DashboardScreen />
      </PhoneScene>

      <div
        style={{
          position: "absolute",
          bottom: 56,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: captionOpacity,
        }}
      >
        <div
          style={{
            fontFamily: INTER,
            fontSize: 26,
            fontWeight: 500,
            color: "rgba(255,255,255,0.8)",
            padding: "0 80px",
          }}
        >
          {captions[captionIdx]}
        </div>
      </div>
    </AbsoluteFill>
  );
};
