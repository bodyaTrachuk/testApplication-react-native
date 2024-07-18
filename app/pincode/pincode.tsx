import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useState } from "react";
import icons from "@/constants/icons";
import { router } from "expo-router";
import { t } from "i18next";
import { AuthContext } from "@/context/AuthContext";

const pinCode = () => {
  const [pin, setPin] = useState<string>("");
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Text>Loading...</Text>;
  }

  const handleKeyPress = (digit: string): void => {
    if (pin.length < 5) {
      setPin(pin + digit);
    }
  };

  const handleDelete = (): void => {
    setPin(pin.slice(0, -1));
  };

  const handleContinue = (): void => {
    if (authContext.user?.pin) {
      authContext.confirmPin(pin);
    } else {
      authContext.setPin(pin);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        <TouchableOpacity
          onPress={() => router.replace("/")}
          style={styles.arrowIcon}
        >
          <Image source={icons.greyArrowAgle} />
        </TouchableOpacity>
        <Image source={icons.pinCode} />
        <Text>{authContext?.user?.email || "User Email"}</Text>
        <TouchableOpacity
          style={styles.buttonSignIn}
          onPress={() => router.replace("/")}
        >
          {authContext.user?.pin ? (
            <Text style={styles.buttonSignInText}>
              {t("enter 5 digit code")}
            </Text>
          ) : (
            <Text style={styles.buttonSignInText}>{t("create account")}</Text>
          )}
        </TouchableOpacity>
        <View style={styles.pinContainer}>
          {[...Array(5)].map((_, index) => (
            <View key={index} style={styles.pinBlock}>
              <View
                style={[styles.filledPin, pin[index] ? styles.activePin : null]}
              />
            </View>
          ))}
        </View>
      </View>
      <View style={styles.keycontainer}>
        <View style={styles.keyboard}>
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((digit) => (
            <TouchableOpacity
              key={digit}
              style={styles.key}
              onPress={() => handleKeyPress(digit)}
            >
              <Text style={styles.keyText}>{digit}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.key} onPress={handleDelete}>
            <Text style={styles.keyText}>⌫</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonSignUp} onPress={handleContinue}>
          <Text style={styles.buttonSignUpText}>{t("continue")}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default pinCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  keycontainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  userInfo: { width: "100%", alignItems: "center" },
  buttonSignIn: {
    width: "100%",
    height: 48,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  buttonSignInText: { fontSize: 15, color: "#FA8A34" },
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
  pinContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  pinBlock: {
    width: 20,
    height: 20,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  filledPin: {
    width: 20,
    height: 20,
    backgroundColor: "#C1C4CB",
    borderRadius: 10,
  },
  activePin: {
    backgroundColor: "#FA8A34",
  },
  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  key: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    elevation: 5,
  },
  keyText: {
    fontSize: 24,
  },
  arrowIcon: {
    position: "absolute",
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 20,
  },
});
