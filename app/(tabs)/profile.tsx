import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../../constants/icons";
import styles from "@/styles/profileStyle";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { AuthContext } from "@/context/AuthContext";

const profile = () => {
  const { t } = useTranslation();
  const authContext = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.settingTitle}>{t("settings")}</Text>
      <View style={styles.userContainer}>
        <Image
          source={authContext?.user ? icons.userProfileIcon : icons.userIcon}
          style={{ width: 45, height: 45 }}
        />
        <Text style={styles.titles}>
          {authContext?.user?.name || "User name"}
        </Text>
      </View>
      <View style={styles.settingBlock}>
        <Text style={styles.settingBlockTitle}>{t("basic")}</Text>
        <TouchableOpacity
          style={styles.settingButton}
          onPress={() => router.navigate("/settings")}
        >
          <View style={styles.settingText}>
            <Image source={icons.globe} />
            <Text style={styles.titles}>{t("language")}</Text>
          </View>
          <Image source={icons.whiteArrowAngle} />
        </TouchableOpacity>
      </View>
      <View style={styles.settingBlock}>
        <Text style={styles.settingBlockTitle}>{t("other")}</Text>
        <TouchableOpacity
          style={styles.settingButton}
          onPress={() => authContext?.signOut()}
        >
          <View style={styles.settingText}>
            <Image source={icons.logout} />
            <Text style={styles.titles}>{t("log out")}</Text>
          </View>
          <Image source={icons.whiteArrowAngle} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default profile;

