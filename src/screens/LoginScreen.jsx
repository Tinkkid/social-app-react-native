import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

const backgroundImage = require("../assets/img/background-image.jpeg");

const LoginScreen = () => {
  return (
    <View style={styles.backgroundWrap}>
      <StatusBar style="auto" />
      <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
        <View style={styles.form}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Увійти</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Адрес електронної пошти"
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.loginBtn} activeOpacity={0.8}>
            <Text>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forRegisterLink} activeOpacity={0.8}>
            <Text>Немає акаунту? Зареєструватись</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundWrap: {
    flex: 1,
  },
  backgroundImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    alignItems: "center",
  },
  form: {
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    minHeight: 550,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
    width: Dimensions.get("window").width,
  },
  input: {
    height: 50,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  headerTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
  },
  loginBtn: {
    height: 51,
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
    borderRadius: 100,
    padding: 16,
    marginTop: 27,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  forRegisterLink: {
    justifyContent: "center",
    alignItems: "center",
    color: "#1B4371",
  },
});

export default LoginScreen;
