import type { Dimension } from "./scenarios";
import { colors } from "./theme";

export type PetMood = "happy" | "sad" | "angry" | "scared" | "neutral";

export interface MoodStyle {
  scale: number;
  opacity: number;
  glowColor: string;
  label: string;
}

export const MOOD_STYLES: Record<PetMood, MoodStyle> = {
  happy: {
    scale: 1.05,
    opacity: 1,
    glowColor: colors.purple[500],
    label: "Feliz",
  },
  neutral: {
    scale: 1,
    opacity: 0.9,
    glowColor: colors.gray[300],
    label: "Normal",
  },
  sad: {
    scale: 0.88,
    opacity: 0.65,
    glowColor: colors.purple[300],
    label: "Triste",
  },
  angry: {
    scale: 1.0,
    opacity: 1,
    glowColor: colors.orange[500],
    label: "Enojado",
  },
  scared: {
    scale: 0.82,
    opacity: 0.75,
    glowColor: colors.mint[500],
    label: "Asustado",
  },
};

// Emotions the child can pick (mapped to PetMood for visual)
export interface EmotionOption {
  value: string;
  label: string;
  mood: PetMood;
  color: string;
}

export const EMOTION_OPTIONS: EmotionOption[] = [
  { value: "sad", label: "Triste", mood: "sad", color: colors.purple[300] },
  { value: "angry", label: "Enojado", mood: "angry", color: colors.orange[500] },
  { value: "neutral", label: "Normal", mood: "neutral", color: colors.gray[500] },
  { value: "happy", label: "Contento", mood: "happy", color: colors.purple[500] },
  { value: "very_happy", label: "Muy feliz", mood: "happy", color: colors.mint[500] },
];

export interface PetReaction {
  mood: PetMood;
  message: string;
}

type ReactionMap = Record<string, PetReaction>;

const reactionsByDimension: Record<Dimension, ReactionMap> = {
  instrucciones: {
    helps: {
      mood: "happy",
      message: "¡Qué bien! {name} está feliz de que le ayudaste.",
    },
    refuses: {
      mood: "neutral",
      message: "{name} entiende. A veces cuesta, pero mañana será más fácil.",
    },
    delays: {
      mood: "neutral",
      message: "{name} esperará. Tómate tu tiempo.",
    },
  },
  socializacion: {
    social: {
      mood: "happy",
      message: "¡{name} ama jugar con amigos! Se divirtió mucho.",
    },
    alone: {
      mood: "neutral",
      message: "{name} disfruta su tiempo a solas. Está tranquila.",
    },
    one_friend: {
      mood: "happy",
      message: "{name} pasó un lindo rato con su amigo.",
    },
  },
  prosocial: {
    shares: {
      mood: "happy",
      message: "¡{name} está orgullosa! Compartir se siente bien.",
    },
    keeps: {
      mood: "neutral",
      message: "A veces es difícil compartir. {name} te entiende.",
    },
    compromises: {
      mood: "happy",
      message: "¡Buena idea! {name} encontró una solución juntos.",
    },
  },
  regulacion: {
    regulates: {
      mood: "happy",
      message: "¡Muy bien! {name} se siente más tranquila ahora.",
    },
    explodes: {
      mood: "sad",
      message: "A veces las emociones son grandes. {name} te acompaña.",
    },
    withdraws: {
      mood: "neutral",
      message: "{name} entiende. Está bien tomarse un momento.",
    },
  },
  animo: {
    great: {
      mood: "happy",
      message: "¡{name} también está feliz! ¡Qué buen día!",
    },
    okay: {
      mood: "neutral",
      message: "{name} está tranquila. Un día normal también está bien.",
    },
    low: {
      mood: "sad",
      message: "{name} te da un abrazo. Mañana será mejor.",
    },
  },
};

export function getPetReaction(
  dimension: Dimension,
  choiceValue: string,
  petName: string
): PetReaction {
  const dimensionReactions = reactionsByDimension[dimension];
  const reaction = dimensionReactions?.[choiceValue] ?? {
    mood: "neutral" as PetMood,
    message: `${petName} te acompaña.`,
  };
  return {
    ...reaction,
    message: reaction.message.replace(/{name}/g, petName),
  };
}
