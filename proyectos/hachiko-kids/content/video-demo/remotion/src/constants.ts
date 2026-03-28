export const C = {
  purple50: "#F0EDFF",
  purple100: "#D4CCFF",
  purple200: "#C4BCFF",
  purple300: "#A89CFF",
  purple500: "#7B61FF",
  purple700: "#5A3FD6",
  purple900: "#2D1F6B",
  mint300: "#6EE7B7",
  mint500: "#34D399",
  mint700: "#059669",
  orange50: "#FFF7ED",
  orange500: "#F97316",
  red50: "#FFF5F5",
  red500: "#EF4444",
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray500: "#6B7280",
  gray700: "#374151",
  gray900: "#111827",
  dark: "#1E1145",
  cream: "#FFF8F0",
  white: "#FFFFFF",
} as const;

export const FPS = 30;

// Delay en frames antes de que arranque el audio (y los subtítulos).
// Ajusta este valor hasta que la voz coincida con la animación visual.
// 0 = inmediato · 30 = 1s · 60 = 2s · 90 = 3s
export const AUDIO_DELAY_FRAMES = 126; // 4.2s × 30fps
export const VIDEO_W = 1920;
export const VIDEO_H = 1080;
export const PHONE_W = 359; // 390 × 0.92
export const PHONE_H = 754; // 820 × 0.92
export const PHONE_X = (VIDEO_W - PHONE_W) / 2;
export const PHONE_Y = (VIDEO_H - PHONE_H) / 2;
// Inner content area (inside border + below status bar)
export const PHONE_INNER_W = PHONE_W - 16;
export const PHONE_INNER_H = PHONE_H - 48; // 8 border + 8 border + 32 status
