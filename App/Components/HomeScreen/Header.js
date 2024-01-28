// Header.js
import React from "react";
import { View, Image, TextInput, Text, StyleSheet } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const { isLoaded, user } = useUser();

  return (
    isLoaded && (
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: user?.imageUrl }}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.fullNameText}>{user?.fullName}</Text>
            </View>
          </View>
          <View style={styles.coinsContainer}>
            <Image
              source={require("../../../assets/coin.png")}
              style={styles.coinImage}
            />
            <Text style={styles.coinText}>3588</Text>
          </View>
        </View>
        {/* Search Icon */}
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search Courses" />
          <Ionicons
            name="search-circle"
            size={32}
            color="#DC84F3"
            style={{ paddingRight: responsiveWidth(3) }}
          />
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#4F76C7",
  },
  profileContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: "#fff",
  },
  welcomeText: {
    fontFamily: "outfit",
    color: "white",
  },
  fullNameText: {
    fontFamily: "outfit-bold",
    color: "#fff",
    textShadowRadius: 6,
    textShadowColor: "#000",
    fontSize: responsiveFontSize(2.5),
  },
  coinsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 5,
  },
  coinImage: {
    width: 35,
    height: 35,
  },
  coinText: {
    fontFamily: "outfit",
    color: "#fff",
    fontSize: responsiveFontSize(2),
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 10,
    padding: 5,
    justifyContent: "space-between",
    marginLeft: responsiveWidth(10),
    marginRight: responsiveWidth(10),
    zIndex: 1,
    position: "absolute",
    top: responsiveHeight(15),
    borderWidth: 2,
    borderColor: "#dadada",
  },

  searchInput: {
    flex: 1,
    paddingLeft: responsiveWidth(5),
    fontFamily: "outfit",
    fontSize: responsiveFontSize(1.9),
  },
});
