import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const PressableButton = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? "#ff7f50" : "#007bff" },
      ]}
    >
      <Text style={styles.buttonText}>Press {pressed ? 'true' : 'false'}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default PressableButton;
