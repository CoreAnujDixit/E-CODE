import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Image
        resizeMode="center"
        style={styles.imgPhone}
        source={require("../../assets/img-portrait.png")}
      />
      <View style={styles.viewer} />
      <View style={styles.wrapper}>
        <Text style={styles.txt}>E-CODE</Text>
        <Text style={styles.txt2}>Ultimate Learning Through this APP!</Text>
        <TouchableOpacity style={styles.login} onPress={onPress}>
          <Image
            style={styles.google}
            source={require("../../assets/google.png")}
          />
          <Text style={styles.googletxt}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imgPhone: {
    height: responsiveHeight(70),
    width: responsiveWidth(70),
  },
  viewer: {
    backgroundColor: "#DC84F3",
    width: responsiveWidth(100),
    height: responsiveHeight(80),
    bottom: responsiveHeight(15),
  },
  wrapper: {
    position: "absolute",
    top: responsiveHeight(60),
    alignItems: "center",
    gap: responsiveHeight(8),
  },
  txt: {
    fontFamily: "outfit-bold",
    fontSize: responsiveFontSize(5),
    color: "#fff",
  },
  txt2: {
    fontFamily: "outfit",
    fontSize: responsiveFontSize(2.5),
    color: "#dadada",
  },
  google: {
    width: 25,
    height: 25,
  },
  googletxt: {
    fontFamily: "outfit",
    fontSize: responsiveFontSize(2),
    color: "#7743DB",
  },
  login: {
    flexDirection: "row",
    borderRadius: responsiveWidth(2),
    alignItems: "center",
    gap: 4,
    backgroundColor: "#fff",
    padding: 10,
  },
});
