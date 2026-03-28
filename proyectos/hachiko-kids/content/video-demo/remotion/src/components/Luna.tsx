import React from "react";

export type LunaMood = "happy" | "sad" | "angry" | "scared" | "neutral";
export type LunaColor = "purple" | "blue" | "green" | "pink" | "orange";

const PALETTES: Record<LunaColor, { body: string; ear: string; accent: string; blush: string; inner: string }> = {
  purple: { body: "#D4CCFF", ear: "#E8E4FF", accent: "#7B61FF", blush: "#C4B5FD", inner: "#EDE9FF" },
  blue:   { body: "#BFDBFE", ear: "#DBEAFE", accent: "#3B82F6", blush: "#93C5FD", inner: "#EFF6FF" },
  green:  { body: "#A7F3D0", ear: "#D1FAE5", accent: "#059669", blush: "#6EE7B7", inner: "#ECFDF5" },
  pink:   { body: "#FBCFE8", ear: "#FCE7F3", accent: "#DB2777", blush: "#F9A8D4", inner: "#FDF2F8" },
  orange: { body: "#FED7AA", ear: "#FFEDD5", accent: "#EA580C", blush: "#FDBA74", inner: "#FFF7ED" },
};

interface LunaProps {
  mood?: LunaMood;
  color?: LunaColor;
  size?: number;
  floatY?: number; // vertical offset for float animation (e.g. -8 to 0)
}

export const Luna: React.FC<LunaProps> = ({
  mood = "happy",
  color = "purple",
  size = 120,
  floatY = 0,
}) => {
  const p = PALETTES[color];
  const s = size;
  const cx = s / 2;
  const cy = s / 2 + s * 0.04 + floatY;

  const bodyW = s * 0.52;
  const bodyH = s * 0.44;
  const bodyX = cx;
  const bodyY = cy + s * 0.22;
  const headR = s * 0.3;
  const headCX = cx;
  const headCY = cy + s * 0.02;

  const eyeLX = headCX - headR * 0.36;
  const eyeRX = headCX + headR * 0.36;
  const eyeY = headCY - headR * 0.04;
  const noseY = headCY + headR * 0.3;
  const wY = noseY + s * 0.01;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
    >
      {/* Tail */}
      <path
        d={`M${cx + bodyW * 0.45} ${bodyY + bodyH * 0.1} Q${cx + bodyW * 0.9} ${bodyY - bodyH * 0.2} ${cx + bodyW * 0.75} ${bodyY - bodyH * 0.5}`}
        stroke={p.body}
        strokeWidth={s * 0.09}
        fill="none"
        strokeLinecap="round"
        opacity={0.9}
      />
      <path
        d={`M${cx + bodyW * 0.45} ${bodyY + bodyH * 0.1} Q${cx + bodyW * 0.9} ${bodyY - bodyH * 0.2} ${cx + bodyW * 0.75} ${bodyY - bodyH * 0.5}`}
        stroke={p.accent}
        strokeWidth={s * 0.04}
        fill="none"
        strokeLinecap="round"
        opacity={0.25}
      />
      {/* Body */}
      <ellipse cx={bodyX} cy={bodyY} rx={bodyW} ry={bodyH} fill={p.body} />
      {/* Belly */}
      <ellipse cx={bodyX} cy={bodyY + bodyH * 0.1} rx={bodyW * 0.55} ry={bodyH * 0.6} fill={p.inner} opacity={0.7} />
      {/* Ears back */}
      <polygon
        points={`${headCX - headR * 0.55},${headCY - headR * 0.75} ${headCX - headR * 0.2},${headCY - headR * 1.25} ${headCX + headR * 0.05},${headCY - headR * 0.7}`}
        fill={p.ear}
      />
      <polygon
        points={`${headCX + headR * 0.55},${headCY - headR * 0.75} ${headCX + headR * 0.2},${headCY - headR * 1.25} ${headCX - headR * 0.05},${headCY - headR * 0.7}`}
        fill={p.ear}
      />
      {/* Head */}
      <circle cx={headCX} cy={headCY} r={headR} fill={p.body} />
      {/* Ear inner */}
      <polygon
        points={`${headCX - headR * 0.5},${headCY - headR * 0.72} ${headCX - headR * 0.22},${headCY - headR * 1.12} ${headCX},${headCY - headR * 0.68}`}
        fill={p.accent}
        opacity={0.35}
      />
      <polygon
        points={`${headCX + headR * 0.5},${headCY - headR * 0.72} ${headCX + headR * 0.22},${headCY - headR * 1.12} ${headCX},${headCY - headR * 0.68}`}
        fill={p.accent}
        opacity={0.35}
      />
      {/* Eyes */}
      {mood === "happy" && (
        <>
          <path
            d={`M${eyeLX - s * 0.055} ${eyeY} Q${eyeLX} ${eyeY - s * 0.07} ${eyeLX + s * 0.055} ${eyeY}`}
            stroke={p.accent}
            strokeWidth={s * 0.025}
            fill="none"
            strokeLinecap="round"
          />
          <path
            d={`M${eyeRX - s * 0.055} ${eyeY} Q${eyeRX} ${eyeY - s * 0.07} ${eyeRX + s * 0.055} ${eyeY}`}
            stroke={p.accent}
            strokeWidth={s * 0.025}
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx={eyeLX} cy={eyeY + s * 0.055} rx={s * 0.055} ry={s * 0.03} fill={p.blush} opacity={0.65} />
          <ellipse cx={eyeRX} cy={eyeY + s * 0.055} rx={s * 0.055} ry={s * 0.03} fill={p.blush} opacity={0.65} />
        </>
      )}
      {mood === "sad" && (
        <>
          <ellipse cx={eyeLX} cy={eyeY} rx={s * 0.055} ry={s * 0.065} fill={p.accent} />
          <ellipse cx={eyeLX} cy={eyeY} rx={s * 0.03} ry={s * 0.038} fill="white" transform={`translate(-${s * 0.012},-${s * 0.015})`} />
          <ellipse cx={eyeRX} cy={eyeY} rx={s * 0.055} ry={s * 0.065} fill={p.accent} />
          <ellipse cx={eyeRX} cy={eyeY} rx={s * 0.03} ry={s * 0.038} fill="white" transform={`translate(-${s * 0.012},-${s * 0.015})`} />
          <ellipse cx={eyeLX - s * 0.01} cy={eyeY + s * 0.08} rx={s * 0.015} ry={s * 0.025} fill="#93C5FD" opacity={0.8} />
          <path d={`M${eyeLX - s * 0.05} ${eyeY - s * 0.1} L${eyeLX + s * 0.04} ${eyeY - s * 0.075}`} stroke={p.accent} strokeWidth={s * 0.022} strokeLinecap="round" fill="none" />
          <path d={`M${eyeRX - s * 0.04} ${eyeY - s * 0.075} L${eyeRX + s * 0.05} ${eyeY - s * 0.1}`} stroke={p.accent} strokeWidth={s * 0.022} strokeLinecap="round" fill="none" />
        </>
      )}
      {mood === "angry" && (
        <>
          <ellipse cx={eyeLX} cy={eyeY} rx={s * 0.055} ry={s * 0.055} fill={p.accent} />
          <ellipse cx={eyeLX} cy={eyeY} rx={s * 0.03} ry={s * 0.03} fill="white" transform={`translate(-${s * 0.01},-${s * 0.01})`} />
          <ellipse cx={eyeRX} cy={eyeY} rx={s * 0.055} ry={s * 0.055} fill={p.accent} />
          <ellipse cx={eyeRX} cy={eyeY} rx={s * 0.03} ry={s * 0.03} fill="white" transform={`translate(-${s * 0.01},-${s * 0.01})`} />
          <path d={`M${eyeLX - s * 0.055} ${eyeY - s * 0.09} L${eyeLX + s * 0.045} ${eyeY - s * 0.12}`} stroke={p.accent} strokeWidth={s * 0.028} strokeLinecap="round" fill="none" />
          <path d={`M${eyeRX - s * 0.045} ${eyeY - s * 0.12} L${eyeRX + s * 0.055} ${eyeY - s * 0.09}`} stroke={p.accent} strokeWidth={s * 0.028} strokeLinecap="round" fill="none" />
        </>
      )}
      {mood === "scared" && (
        <>
          <ellipse cx={eyeLX} cy={eyeY} rx={s * 0.07} ry={s * 0.08} fill={p.accent} />
          <ellipse cx={eyeLX} cy={eyeY} rx={s * 0.04} ry={s * 0.045} fill="white" transform={`translate(-${s * 0.015},-${s * 0.015})`} />
          <ellipse cx={eyeRX} cy={eyeY} rx={s * 0.07} ry={s * 0.08} fill={p.accent} />
          <ellipse cx={eyeRX} cy={eyeY} rx={s * 0.04} ry={s * 0.045} fill="white" transform={`translate(-${s * 0.015},-${s * 0.015})`} />
          <path d={`M${eyeLX - s * 0.055} ${eyeY - s * 0.12} Q${eyeLX} ${eyeY - s * 0.15} ${eyeLX + s * 0.055} ${eyeY - s * 0.12}`} stroke={p.accent} strokeWidth={s * 0.022} strokeLinecap="round" fill="none" />
          <path d={`M${eyeRX - s * 0.055} ${eyeY - s * 0.12} Q${eyeRX} ${eyeY - s * 0.15} ${eyeRX + s * 0.055} ${eyeY - s * 0.12}`} stroke={p.accent} strokeWidth={s * 0.022} strokeLinecap="round" fill="none" />
        </>
      )}
      {mood === "neutral" && (
        <>
          <ellipse cx={eyeLX} cy={eyeY} rx={s * 0.055} ry={s * 0.065} fill={p.accent} />
          <ellipse cx={eyeLX} cy={eyeY} rx={s * 0.028} ry={s * 0.035} fill="white" transform={`translate(-${s * 0.012},-${s * 0.015})`} />
          <ellipse cx={eyeRX} cy={eyeY} rx={s * 0.055} ry={s * 0.065} fill={p.accent} />
          <ellipse cx={eyeRX} cy={eyeY} rx={s * 0.028} ry={s * 0.035} fill="white" transform={`translate(-${s * 0.012},-${s * 0.015})`} />
        </>
      )}
      {/* Whiskers */}
      <line x1={headCX - s * 0.06} y1={wY - s * 0.015} x2={headCX - s * 0.22} y2={wY - s * 0.03} stroke={p.accent} strokeWidth={s * 0.014} strokeLinecap="round" opacity={0.5} />
      <line x1={headCX - s * 0.06} y1={wY + s * 0.015} x2={headCX - s * 0.22} y2={wY + s * 0.02} stroke={p.accent} strokeWidth={s * 0.014} strokeLinecap="round" opacity={0.5} />
      <line x1={headCX + s * 0.06} y1={wY - s * 0.015} x2={headCX + s * 0.22} y2={wY - s * 0.03} stroke={p.accent} strokeWidth={s * 0.014} strokeLinecap="round" opacity={0.5} />
      <line x1={headCX + s * 0.06} y1={wY + s * 0.015} x2={headCX + s * 0.22} y2={wY + s * 0.02} stroke={p.accent} strokeWidth={s * 0.014} strokeLinecap="round" opacity={0.5} />
      {/* Nose */}
      <ellipse cx={headCX} cy={noseY} rx={s * 0.032} ry={s * 0.022} fill={p.accent} opacity={0.9} />
      {/* Mouth */}
      {mood === "happy" && (
        <path
          d={`M${headCX - s * 0.055} ${noseY + s * 0.035} Q${headCX} ${noseY + s * 0.085} ${headCX + s * 0.055} ${noseY + s * 0.035}`}
          stroke={p.accent}
          strokeWidth={s * 0.022}
          fill="none"
          strokeLinecap="round"
        />
      )}
      {(mood === "sad" || mood === "angry") && (
        <path
          d={`M${headCX - s * 0.055} ${noseY + s * 0.065} Q${headCX} ${noseY + s * 0.025} ${headCX + s * 0.065} ${noseY + s * 0.065}`}
          stroke={p.accent}
          strokeWidth={s * 0.022}
          fill="none"
          strokeLinecap="round"
        />
      )}
      {mood === "scared" && (
        <ellipse cx={headCX} cy={noseY + s * 0.06} rx={s * 0.03} ry={s * 0.03} fill={p.accent} opacity={0.8} />
      )}
      {mood === "neutral" && (
        <path
          d={`M${headCX - s * 0.05} ${noseY + s * 0.045} L${headCX + s * 0.05} ${noseY + s * 0.045}`}
          stroke={p.accent}
          strokeWidth={s * 0.022}
          fill="none"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
};
