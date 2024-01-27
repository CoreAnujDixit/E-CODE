import { View, Image, Text } from "react-native";
import React from "react";

export default function MyCourse() {
  return (
    <View>
      <Image
        width={200}
        height={200}
        resizeMode="contain"
        source={{
          uri: "https://i.postimg.cc/MG72Sn9C/image.png",
        }}
      />
    </View>
  );
}
