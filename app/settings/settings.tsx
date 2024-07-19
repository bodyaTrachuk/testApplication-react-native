import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../../constants/icons";
import { useTranslation } from "react-i18next";
import { router } from "expo-router";


const index = () => {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en", tittle: "English" },
    { code: "ar", tittle: "Arabic" },
    { code: "jp", tittle: "Japanese" },
    { code: "ua", tittle: "Ukrainian" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.arrowIcon}>
        <Image source={icons.greyArrowAgle} />
      </TouchableOpacity>
      <Text style={styles.settingTitle}>{t("language")}</Text>
      {languages.map((data) => (
        <View style={styles.settingBlock} key={data.code}>
          <TouchableOpacity
            style={styles.settingButton}
            onPress={() => i18n.changeLanguage(data.code)}
          >
            <View style={styles.settingText}>
              <Image source={icons.globe} />
              <Text style={styles.titles}>{data.tittle}</Text>
            </View>
            <Image
              source={
                i18n.language === data.code ? icons.acrive : icons.userIcon
              }
            />
          </TouchableOpacity>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    gap: 20,
    position: "relative",
    marginTop: 50,
  },
  settingBlock: {
    gap: 10,
    marginTop: 10,
  },
  settingButton: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    height: 56,
    borderWidth: 1,
    borderColor: "#CED5E0",
    borderRadius: 16,
  },
  settingText: {
    flexDirection: "row",
    gap: 10,
  },
  titles: { fontSize: 15, fontWeight: "500" },
  settingTitle: {
    fontSize: 22,
    fontWeight: "600",
    alignSelf: "flex-start",
    paddingLeft: 25,
    paddingTop: 25,
  },
  arrowIcon: {
    position: "absolute",
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 20,
  },
});
