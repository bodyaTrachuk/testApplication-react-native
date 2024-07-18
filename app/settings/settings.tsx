import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../../constants/icons";
import { useTranslation } from "react-i18next";
import { router } from "expo-router";

const index = () => {
  const [english, setEnglish] = useState<boolean>(false);
  const [arabic, setArabic] = useState<boolean>(false);
  const [japan, setJapan] = useState<boolean>(false);
  const [ukraine, setUkraine] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  const handleLanguageEnglish = () => {
    setEnglish(true);
    setArabic(false);
    setJapan(false);
    setUkraine(false);
    i18n.changeLanguage("en");
  };

  const handleLanguageArabic = () => {
    setArabic(true);
    setEnglish(false);
    setJapan(false);
    setUkraine(false);
    i18n.changeLanguage("ar");
  };

  const handleLanguageJapan = () => {
    setJapan(true);
    setArabic(false);
    setEnglish(false);
    setUkraine(false);
    i18n.changeLanguage("jp");
  };
  const handleLanguageUkraine = () => {
    setUkraine(true);
    setJapan(false);
    setArabic(false);
    setEnglish(false);
    i18n.changeLanguage("ua");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.arrowIcon}>
        <Image source={icons.greyArrowAgle} />
      </TouchableOpacity>
      <View style={styles.settingBlock}>
        <Text style={styles.settingTitle}>{t("language")}</Text>

        <TouchableOpacity
          style={styles.settingButton}
          onPress={handleLanguageEnglish}
        >
          <View style={styles.settingText}>
            <Image source={icons.globe} />
            <Text style={styles.titles}>English</Text>
          </View>
          <Image source={english ? icons.acrive : icons.userIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.settingBlock}>
        <TouchableOpacity
          style={styles.settingButton}
          onPress={handleLanguageArabic}
        >
          <View style={styles.settingText}>
            <Image source={icons.globe} />
            <Text style={styles.titles}>Arabic</Text>
          </View>
          <Image source={arabic ? icons.acrive : icons.userIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.settingBlock}>
        <TouchableOpacity
          style={styles.settingButton}
          onPress={handleLanguageJapan}
        >
          <View style={styles.settingText}>
            <Image source={icons.globe} />
            <Text style={styles.titles}>Japan</Text>
          </View>
          <Image source={japan ? icons.acrive : icons.userIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.settingBlock}>
        <TouchableOpacity
          style={styles.settingButton}
          onPress={handleLanguageUkraine}
        >
          <View style={styles.settingText}>
            <Image source={icons.globe} />
            <Text style={styles.titles}>Ukraine</Text>
          </View>
          <Image source={ukraine ? icons.acrive : icons.userIcon} />
        </TouchableOpacity>
      </View>
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
  settingTitle: { fontSize: 22, fontWeight: "600" },
  arrowIcon: {
    position: "absolute",
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 20,
  },
});
