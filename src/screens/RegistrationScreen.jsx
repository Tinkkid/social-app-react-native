import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import AddPhotoUser from "../assets/img/add-photo.svg";

const backgroundImage = require("../assets/img/background-image.jpeg");

const initialState = {
  email: "",
  login: "",
  password: "",
};

const RegisterScreen = () => {
  const [userData, setUserData] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setUserData(initialState);
    console.log(userData);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={backgroundImage}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 32 : 78,
              }}
            >
              <View style={styles.userPhotoWrap}>
                <View style={styles.userPhotoContainer}>
                  <Image style={styles.userPhoto} />
                </View>
                <View style={styles.addUserIcon}>
                  <AddPhotoUser />
                </View>
              </View>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Реєстрація</Text>
              </View>
              <TextInput
                style={styles.input}
                value={userData.login}
                placeholder="Логін"
                onChangeText={(value) =>
                  setUserData((prevState) => ({ ...prevState, login: value }))
                }
                onFocus={() => setIsShowKeyboard(true)}
              />
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
                style={styles.registerBtn}
                activeOpacity={0.8}
                onPress={keyboardHide}
              >
                <Text>Зареєструватися</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.forLoginLink} activeOpacity={0.8}>
                <Text>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    alignItems: "center",
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
    marginHorizontal: 16,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  forLoginLink: {
    justifyContent: "center",
    color: "#1B4371",
    alignItems: "center",
  },
});

export default RegisterScreen;
