import React from "react";
import { AbsoluteFill } from "remotion";
import { C, PHONE_W, PHONE_H, PHONE_X, PHONE_Y, VIDEO_W, VIDEO_H } from "../constants";
import { INTER } from "../fonts";

interface PhoneFrameProps {
  children?: React.ReactNode;
  background?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  background = C.white,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        left: PHONE_X,
        top: PHONE_Y,
        width: PHONE_W,
        height: PHONE_H,
        borderRadius: 48,
        background,
        overflow: "hidden",
        boxShadow:
          "0 48px 120px rgba(30,17,69,0.45), 0 16px 40px rgba(123,97,255,0.3)",
        border: "8px solid #14093a",
      }}
    >
      {/* Status bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 32,
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: C.gray700,
            fontFamily: INTER,
          }}
        >
          9:41
        </span>
        <span style={{ fontSize: 10, color: C.gray500, fontFamily: INTER }}>
          ● ● ●
        </span>
      </div>
      {/* Content area */}
      <div
        style={{
          position: "absolute",
          top: 32,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};

/** Wraps a PhoneFrame on a styled video background */
export const PhoneScene: React.FC<{
  children?: React.ReactNode;
  caption?: string;
  phoneBackground?: string;
}> = ({ children, caption, phoneBackground }) => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, #1E1145 0%, #2D1F6B 60%, #3A2880 100%)`,
      }}
    >
      {/* Subtle glow behind phone */}
      <div
        style={{
          position: "absolute",
          left: PHONE_X - 60,
          top: PHONE_Y - 60,
          width: PHONE_W + 120,
          height: PHONE_H + 120,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(123,97,255,0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <PhoneFrame background={phoneBackground}>{children}</PhoneFrame>
      {caption && (
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: INTER,
            fontSize: 26,
            fontWeight: 500,
            color: "rgba(255,255,255,0.75)",
            letterSpacing: "0.01em",
          }}
        >
          {caption}
        </div>
      )}
    </AbsoluteFill>
  );
};
