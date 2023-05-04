import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";

const backgroundImage = require("../assets/img/background-image.jpeg");

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [userData, setUserData] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setUserData(initialState);
    console.log(userData);
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
        <KeyboardAvoidingView
          style={styles.keyBoardView}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.form,
              paddingBottom: isShowKeyboard ? 32 : 78,
            }}
          >
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Увійти</Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Адрес електронної пошти"
              value={userData.email}
              onChangeText={(value) =>
                setUserData((prevState) => ({ ...prevState, email: value }))
              }
              onFocus={() => setIsShowKeyboard(true)}
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={true}
              value={userData.password}
              onChangeText={(value) =>
                setUserData((prevState) => ({
                  ...prevState,
                  password: value,
                }))
              }
              onFocus={() => setIsShowKeyboard(true)}
            />
            <TouchableOpacity
              style={styles.loginBtn}
              activeOpacity={0.8}
              onPress={keyboardHide}
            >
              <Text>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.forRegisterLink}
              activeOpacity={0.8}
            >
              <Text>Немає акаунта? Зареєструватись</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  keyBoardView: { justifyContent: "flex-end" },
  form: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  input: {
    height: 50,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  header: {
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
    marginTop: 92,
    marginBottom: 33,
  },
  loginBtn: {
    height: 51,
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
    borderRadius: 100,
    padding: 16,
    marginTop: 27,
    marginHorizontal: 16,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  forRegisterLink: {
    justifyContent: "center",
    color: "#1B4371",
    alignItems: "center",
  },
});

export default LoginScreen;
