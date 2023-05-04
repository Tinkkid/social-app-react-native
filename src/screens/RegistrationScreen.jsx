import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import AddPhotoUser from "../assets/img/add-photo.svg";

const backgroundImage = require("../assets/img/background-image.jpeg");

const RegisterScreen = () => {
  return (
    <View style={styles.backgroundWrap}>
      <StatusBar style="auto" />
      <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
        <View style={styles.form}>
          <View style={styles.userPhotoWrap}>
            <View style={styles.userPhotoContainer}>
              <Image style={styles.userPhoto} />
            </View>
            {/* <Button title="Add foto user" onPress={() => Alert.alert("Test")}/> */}
            <View style={styles.addUserIcon}>
              <AddPhotoUser />
            </View>
          </View>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Регістрація</Text>
          </View>

          <TextInput style={styles.input} placeholder="Логін" />
          <TextInput
            style={styles.input}
            placeholder="Адрес електронної пошти"
          />
          <TextInput style={styles.input} placeholder="Пароль" />
          <View>
            <Text style={styles.registerBtn}>Зареєструватися</Text>
          </View>
          <View>
            <Text style={styles.forLoginLink}>Вже є акаунт? Увійти</Text>
          </View>
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
  userPhotoWrap: {
    position: "absolute",
    top: -60,
    left: Dimensions.get("window").width * 0.5 - 60,
    flex: 1,
  },
  userPhotoContainer: {
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  userPhoto: {
    width: 120,
    height: 120,
  },
  addUserIcon: {
    position: "absolute",
    top: 81,
    left: 107,
  },
  registerBtn: {
    height: 51,
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
    borderRadius: 100,
    padding: 16,
    marginTop: 27,
    marginBottom: 16,
    textAlign: "center",
  },

  forLoginLink: {
    textAlign: "center",
    color: "#1B4371",
  },
});

export default RegisterScreen;
