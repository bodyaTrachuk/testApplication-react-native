import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

const portfolio = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.containerTitle}>{t('portfolio')}</Text>
    </SafeAreaView>
  );
};

export default portfolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F2F3F5",
    justifyContent: "center",
    alignItems:'center'
  },
  containerTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#06070A",
    padding: 20,
  },
});
