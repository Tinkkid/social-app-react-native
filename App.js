import { StatusBar } from "expo-status-bar";
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

  return <RegisterScreen />;
}
