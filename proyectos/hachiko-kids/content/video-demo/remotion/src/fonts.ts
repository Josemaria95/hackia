import { loadFont as loadFredoka } from "@remotion/google-fonts/Fredoka";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const { fontFamily: fredokaFamily } = loadFredoka("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const { fontFamily: interFamily } = loadInter("normal", {
  weights: ["400", "500", "600"],
  subsets: ["latin"],
});

export const FREDOKA = fredokaFamily;
export const INTER = interFamily;
