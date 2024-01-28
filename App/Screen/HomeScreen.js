import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import Header from "../Components/HomeScreen/Header";

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ flex: 1 }}>
        <Header />
        <View style={styles.container} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCFFB7",
  },
});
