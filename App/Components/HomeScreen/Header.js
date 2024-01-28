import { View, Image, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    isLoaded && (
      <View>
        <View
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: user?.imageUrl }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 99,
              borderWidth: 2,
              borderColor: "#fff",
            }}
          />
          <View>
            <Text style={{ fontFamily: "outfit", color: "white" }}>
              Welcome
            </Text>
            <Text
              style={{
                fontFamily: "outfit-bold",
                color: "#fff",
                textShadowRadius: 6,
                textShadowColor: "#000",
                fontSize: responsiveFontSize(2.5),
              }}
            >
              {user?.fullName}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            padding: 25,
          }}
        >
          <Image
            source={require("../../../assets/coin.png")}
            style={{
              width: 35,
              height: 35,
            }}
          />
          <Text
            style={{
              fontFamily: "outfit-bold",
              color: "#fff",
              fontSize: responsiveFontSize(2),
            }}
          >
            3588
          </Text>
        </View>
      </View>
    )
  );
}
