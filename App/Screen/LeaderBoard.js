import { View, Image } from "react-native";
import React from "react";

export default function LeaderBoard() {
  return (
    <View>
      <Image
        width={200}
        height={200}
        resizeMode="contain"
        source={{
          uri: "https://i.postimg.cc/C5FwtGYr/image.png",
        }}
      />
    </View>
  );
}
