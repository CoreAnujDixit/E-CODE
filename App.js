import { View, StyleSheet, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import LoginScreen from "./App/Screen/LoginScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import TabNavigation from "./App/Navigations/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  const [fontsLoaded, fontError] = useFonts({
    outfit: require("./assets/fonts/static/Outfit-Regular.ttf"),
    "outfit-bold": require("./assets/fonts/static/Outfit-Bold.ttf"),
    "outfit-thin": require("./assets/fonts/static/Outfit-Thin.ttf"),
    "outfit-extra": require("./assets/fonts/static/Outfit-ExtraBold.ttf"),
  });
  return (
    // Clerk for _Auth
    <ClerkProvider
      publishableKey={"pk_test_ZGl2aW5lLWVsay03NS5jbGVyay5hY2NvdW50cy5kZXYk"}
    >
      {/* Sign in */}
      <SignedIn>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </SignedIn>

      {/* Signout */}
      <StatusBar />
      <SignedOut>
        <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  );
}
export default App;
