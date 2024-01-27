import { View, Image } from "react-native";
import React from "react";

export default function ProfileScreen() {
  return (
    <View>
      <Image
        width={200}
        height={200}
        resizeMode="contain"
        source={{
          uri: "https://i.postimg.cc/DZxNvLLM/image.png",
        }}
      />
    </View>
  );
}
