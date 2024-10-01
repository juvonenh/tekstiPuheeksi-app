import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import * as Speech from "expo-speech";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const speak = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter some text"
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Button title="PRESS TO HEAR TEXT" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 80,
    width: 280,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
  },
});
