import { View, Image } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View>
      <Image
        width={200}
        height={200}
        resizeMode="contain"
        source={{
          uri: "https://i.postimg.cc/FK3mHWHn/image.png",
        }}
      />
    </View>
  );
}
