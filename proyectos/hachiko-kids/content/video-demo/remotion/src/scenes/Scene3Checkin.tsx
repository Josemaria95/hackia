import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { C } from "../constants";
import { FREDOKA, INTER } from "../fonts";
import { Luna } from "../components/Luna";
import { PhoneScene } from "../components/PhoneFrame";

// ── Scenario sub-screen (s12) ──
const ScenarioScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const floatY = -8 * (0.5 - 0.5 * Math.cos((frame / fps) * Math.PI * 2 / 3));

  const enterOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const cardEnter = interpolate(frame, [12, 35], [24, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cardOpacity = interpolate(frame, [12, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // "Choice selected" at frame 160
  const choice1Selected = frame > 160;
  const choice1Scale = frame > 160
    ? spring({ frame: frame - 160, fps, config: { damping: 16, stiffness: 200 } })
    : 1;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: C.gray50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 20px 0",
        opacity: enterOpacity,
      }}
    >
      {/* Luna */}
      <div style={{ transform: `translateY(${floatY}px)`, marginBottom: 10 }}>
        <Luna mood={choice1Selected ? "happy" : "neutral"} color="purple" size={110} />
      </div>

      {/* Scenario card */}
      <div
        style={{
          background: C.white,
          borderRadius: 20,
          padding: "18px 16px",
          width: "100%",
          boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
          textAlign: "center",
          transform: `translateY(${cardEnter}px)`,
          opacity: cardOpacity,
        }}
      >
        <div
          style={{
            fontFamily: FREDOKA,
            fontSize: 17,
            fontWeight: 600,
            color: C.dark,
            lineHeight: 1.35,
            marginBottom: 14,
          }}
        >
          Luna necesita ordenar sus juguetes.{"\n"}¿La ayudas?
        </div>

        {/* Choice buttons */}
        {[
          { icon: "✨", label: "¡Sí, vamos!", selected: choice1Selected },
          { icon: "😐", label: "Ahora no", selected: false },
          { icon: "⏱️", label: "Un ratito más", selected: false },
        ].map((choice, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              padding: "13px 16px",
              border: `2px solid ${choice.selected ? C.purple500 : C.gray200}`,
              borderRadius: 14,
              background: choice.selected ? C.purple50 : C.white,
              fontFamily: FREDOKA,
              fontSize: 15,
              fontWeight: 500,
              color: choice.selected ? C.purple700 : C.gray700,
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 8,
              transform: choice.selected ? `scale(${1 + 0.04 * (choice1Scale - 1)})` : "scale(1)",
            }}
          >
            <span style={{ fontSize: 18 }}>{choice.icon}</span>
            {choice.label}
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Emotion sub-screen (s13) ──
const EMOTIONS = [
  { key: "happy", label: "Feliz", bg: "#D1FAE5", emoji: "😊" },
  { key: "neutral", label: "Normal", bg: C.gray100, emoji: "😐" },
  { key: "sad", label: "Triste", bg: "#DBEAFE", emoji: "😢" },
  { key: "angry", label: "Enojado", bg: "#FEE2E2", emoji: "😠" },
  { key: "scared", label: "Asustado", bg: C.orange50, emoji: "😨" },
];

const EmotionScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const floatY = -8 * (0.5 - 0.5 * Math.cos((frame / fps) * Math.PI * 2 / 3));

  const enterOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const happySelected = frame > 140;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: C.gray50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 20px 0",
        opacity: enterOpacity,
      }}
    >
      <div style={{ transform: `translateY(${floatY}px)`, marginBottom: 10 }}>
        <Luna mood={happySelected ? "happy" : "neutral"} color="purple" size={110} />
      </div>

      <div
        style={{
          fontFamily: FREDOKA,
          fontSize: 20,
          fontWeight: 600,
          color: C.dark,
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        ¿Cómo te sientes tú ahora?
      </div>

      {/* Emotion circles */}
      <div
        style={{
          display: "flex",
          gap: 8,
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: 20,
        }}
      >
        {EMOTIONS.map((emo) => {
          const isSelected = happySelected && emo.key === "happy";
          return (
            <div
              key={emo.key}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
                padding: "8px 10px",
                borderRadius: 16,
                border: `2px solid ${isSelected ? C.dark : "transparent"}`,
                background: isSelected ? "rgba(30,17,69,0.04)" : "transparent",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: emo.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                }}
              >
                {emo.emoji}
              </div>
              <span
                style={{
                  fontFamily: INTER,
                  fontSize: 11,
                  fontWeight: 500,
                  color: C.gray500,
                }}
              >
                {emo.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div
        style={{
          width: "100%",
          padding: "16px",
          background: happySelected ? C.purple500 : C.gray200,
          borderRadius: 50,
          fontFamily: FREDOKA,
          fontSize: 17,
          fontWeight: 700,
          color: C.white,
          textAlign: "center",
          boxShadow: happySelected ? "0 6px 20px rgba(123,97,255,0.4)" : "none",
        }}
      >
        Siguiente
      </div>
    </div>
  );
};

// ── Reaction sub-screen (s14) ──
const ReactionScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const floatY = -8 * (0.5 - 0.5 * Math.cos((frame / fps) * Math.PI * 2 / 3));

  const enterOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const lunaScale = spring({ frame, fps, config: { damping: 12, stiffness: 140 } });
  const msgOpacity = interpolate(frame, [20, 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const msgY = interpolate(frame, [20, 45], [16, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: C.gray50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px 20px 0",
        opacity: enterOpacity,
      }}
    >
      <div
        style={{
          transform: `scale(${lunaScale}) translateY(${floatY}px)`,
          marginBottom: 14,
        }}
      >
        <Luna mood="happy" color="purple" size={130} />
      </div>

      {/* Reaction message */}
      <div
        style={{
          background: C.purple50,
          borderRadius: 20,
          padding: "16px 18px",
          width: "100%",
          textAlign: "center",
          opacity: msgOpacity,
          transform: `translateY(${msgY}px)`,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            fontFamily: FREDOKA,
            fontSize: 17,
            fontWeight: 700,
            color: C.purple700,
            marginBottom: 6,
          }}
        >
          ¡Luna está muy contenta!
        </div>
        <div
          style={{
            fontFamily: INTER,
            fontSize: 13,
            color: C.gray500,
            lineHeight: 1.5,
          }}
        >
          Gracias por ayudarla. Cuando ayudamos a otros
          nos sentimos bien por dentro.
        </div>
      </div>

      {/* Buttons */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{
            padding: "16px",
            background: C.mint500,
            borderRadius: 50,
            fontFamily: FREDOKA,
            fontSize: 16,
            fontWeight: 700,
            color: C.white,
            textAlign: "center",
            boxShadow: "0 6px 20px rgba(52,211,153,0.35)",
          }}
        >
          Respirar con Luna
        </div>
        <div
          style={{
            padding: "12px",
            background: "transparent",
            borderRadius: 50,
            fontFamily: FREDOKA,
            fontSize: 14,
            color: C.purple500,
            textAlign: "center",
          }}
        >
          Siguiente
        </div>
      </div>
    </div>
  );
};

// ── Breathe sub-screen (s15) ──
const BreatheScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const floatY = -8 * (0.5 - 0.5 * Math.cos((frame / fps) * Math.PI * 2 / 3));

  const enterOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });

  // Breathe ring scale: 3.5s cycle
  const breatheScale = 1 + 0.22 * (0.5 - 0.5 * Math.cos((frame / fps) * Math.PI * 2 / 3.5));

  // Inhale/exhale phase label
  const cyclePos = ((frame / fps) % 3.5) / 3.5;
  const isInhale = cyclePos < 0.5;

  // Completed dots (1 cycle = 3.5s = 105f)
  const completedCycles = Math.min(4, Math.floor(frame / 105));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: C.gray50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 20px 0",
        opacity: enterOpacity,
      }}
    >
      <div
        style={{
          fontFamily: FREDOKA,
          fontSize: 20,
          fontWeight: 700,
          color: C.dark,
          textAlign: "center",
          marginBottom: 4,
        }}
      >
        Respira con Luna
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
        4 respiraciones juntos
      </div>

      {/* Breathe ring */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 12,
        }}
      >
        <div
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: "radial-gradient(circle at center, rgba(110,231,183,0.3) 0%, rgba(52,211,153,0.15) 60%, transparent 100%)",
            border: `3px solid ${C.mint300}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 40px rgba(52,211,153,0.25)",
            transform: `scale(${breatheScale})`,
          }}
        >
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              background: C.mint500,
              opacity: 0.7,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ transform: `translateY(${floatY}px)` }}>
              <Luna mood="neutral" color="green" size={70} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          fontFamily: FREDOKA,
          fontSize: 22,
          fontWeight: 700,
          color: C.mint700,
          textAlign: "center",
          marginBottom: 4,
        }}
      >
        {isInhale ? "Inhala…" : "Exhala…"}
      </div>
      <div
        style={{
          fontFamily: INTER,
          fontSize: 13,
          color: C.gray500,
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        {isInhale ? "Llena tu panza de aire" : "Suelta el aire suavemente"}
      </div>

      {/* Progress dots */}
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 16 }}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: i < completedCycles ? C.mint500 : C.gray200,
              transform: i === completedCycles ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>

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
        Listo
      </div>
    </div>
  );
};

// ── Caption overlay ──
const Caption: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: 56,
        left: 0,
        right: 0,
        textAlign: "center",
        opacity,
        fontFamily: INTER,
        fontSize: 26,
        fontWeight: 500,
        color: "rgba(255,255,255,0.8)",
        padding: "0 80px",
        letterSpacing: "0.01em",
      }}
    >
      {text}
    </div>
  );
};

// ── Main Scene 3 ──
export const Scene3Checkin: React.FC = () => {
  const frame = useCurrentFrame();


  return (
    <AbsoluteFill>
      {/* Scenario: frames 0–188 */}
      <Sequence from={0} durationInFrames={188} premountFor={15}>
        <PhoneScene>
          <ScenarioScreen />
        </PhoneScene>
        <Caption text='Luna quiere ordenar. Sofía elige: "¡Sí, vamos!" — esa elección importa.' />
      </Sequence>

      {/* Emotion: frames 188–351 */}
      <Sequence from={188} durationInFrames={163} premountFor={15}>
        <PhoneScene>
          <EmotionScreen />
        </PhoneScene>
        <Caption text="¿Cómo se siente Sofía hoy? Ella elige. Y eso también importa." />
      </Sequence>

      {/* Reaction: frames 351–531 */}
      <Sequence from={351} durationInFrames={180} premountFor={15}>
        <PhoneScene>
          <ReactionScreen />
        </PhoneScene>
        <Caption text="Luna reacciona. El juego se siente real. Y tiene 60 segundos." />
      </Sequence>

      {/* Breathe: frames 531–686 */}
      <Sequence from={531} durationInFrames={155} premountFor={15}>
        <PhoneScene>
          <BreatheScreen />
        </PhoneScene>
        <Caption text="¿Quiere respirar con Luna? 4 ciclos. Sin presión." />
      </Sequence>
    </AbsoluteFill>
  );
};
