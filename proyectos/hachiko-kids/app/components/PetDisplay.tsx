import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { MOOD_STYLES, type PetMood } from "../lib/pet-reactions";
import { fonts, theme } from "../lib/theme";

interface Props {
  mood: PetMood;
  name: string;
  size?: number;
  showName?: boolean;
}


export default function PetDisplay({
  mood,
  name,
  size = 200,
  showName = true,
}: Props) {
  const scale = useRef(new Animated.Value(MOOD_STYLES[mood].scale)).current;
  const opacity = useRef(new Animated.Value(MOOD_STYLES[mood].opacity)).current;
  const shakeX = useRef(new Animated.Value(0)).current;
  const shakeAnim = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    const style = MOOD_STYLES[mood];
    Animated.parallel([
      Animated.spring(scale, {
        toValue: style.scale,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: style.opacity,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // Angry shake
    if (shakeAnim.current) {
      shakeAnim.current.stop();
      shakeAnim.current = null;
    }

    if (mood === "angry") {
      shakeAnim.current = Animated.loop(
        Animated.sequence([
          Animated.timing(shakeX, {
            toValue: 1.5,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(shakeX, {
            toValue: -1.5,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(shakeX, {
            toValue: 1.5,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(shakeX, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
          }),
        ])
      );
      shakeAnim.current.start();
    } else {
      shakeX.setValue(0);
    }

    return () => {
      if (shakeAnim.current) {
        shakeAnim.current.stop();
      }
    };
  }, [mood]);

  const style = MOOD_STYLES[mood];

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.glow,
          {
            width: size + 20,
            height: size + 20,
            borderRadius: (size + 20) / 2,
            backgroundColor: style.glowColor,
            opacity: 0.15,
          },
        ]}
      />
      <Animated.Image
        source={require("../assets/logo.png")}
        style={{
          width: size,
          height: size,
          transform: [{ scale }, { translateX: shakeX }],
          opacity,
        }}
        resizeMode="contain"
      />
      {showName && <Text style={styles.name}>{name}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center" },
  glow: { position: "absolute" },
  name: { fontSize: 20, fontFamily: fonts.displaySemiBold, marginTop: 8, color: theme.dark },
});
