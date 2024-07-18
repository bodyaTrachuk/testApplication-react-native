import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";

import svgComponents from "../constants/svgComponets";
import { useTranslation } from "react-i18next";
import { AuthContext } from "@/context/AuthContext";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const index: React.FC = () => {
  const { t } = useTranslation();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  });

  if (authContext?.isLogged) {
    return <Redirect href="/pincode" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerItems}>
        <View style={styles.section1}>
          <View>
            <svgComponents.CryptoIcon />
          </View>
          <View style={styles.sections}>
            <svgComponents.SvgComponent1 />
            <Text>Lorem ipsum 1</Text>
          </View>
          <View style={styles.sections}>
            <svgComponents.SvgComponent3 />
            <Text>Lorem ipsum 3</Text>
          </View>
        </View>

        <View style={styles.section2}>
          <View style={styles.sections}>
            <svgComponents.SvgComponent2 />
            <Text>Lorem ipsum 2</Text>
          </View>

          <View style={styles.sections}>
            <svgComponents.SvgComponent4 />
            <Text>Lorem ipsum 4</Text>
          </View>

          <View style={styles.sections}>
            <svgComponents.SvgComponent5 />
            <Text>Lorem ipsum 5</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonSignIn}
          onPress={() => router.navigate("/signIn")}
        >
          <Text style={styles.buttonSignInText}>{t("sign in")}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={() => router.navigate("/signUp")}
        >
          <Text style={styles.buttonSignUpText}>{t("sign up")}</Text>
        </TouchableOpacity>
      </View>
      {/* <StatusBar backgroundColor="#c3c2c2" barStyle="dark-content" /> */}
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
  },
  containerItems: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  section1: { gap: 30 },
  section2: { gap: 30, marginTop: 130 },
  sections: {
    width: 150,
    height: 136,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    borderRadius: 16,
  },
  buttonContainer: { width: "100%", alignItems: "center", gap: 20 },
  buttonSignIn: {
    width: "90%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  buttonSignInText: {
    fontSize: 15,
    color: "#FA8A34",
  },
  buttonSignUp: {
    width: "90%",
    height: 48,
    backgroundColor: "#FA8A34",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  buttonSignUpText: {
    fontSize: 15,
    color: "white",
  },
});
