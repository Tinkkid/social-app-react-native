import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RegisterScreen from "./src/screens/RegistrationScreen.jsx";
import { useFonts } from "expo-font";
// import LoginScreen from "./src/screens/LoginScreen.jsx";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RegisterScreen />
      {/* <LoginScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
