import { View, StyleSheet } from "react-native";
import React from "react";
import Header from "../Components/HomeScreen/Header";
import { responsiveHeight } from "react-native-responsive-dimensions";

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DC84F3",
    height: responsiveHeight(40),
    bottom: responsiveHeight(25),
    zIndex: -1,
  },
});
