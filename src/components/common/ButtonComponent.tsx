import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface ButtonComponentProps {
  title: string;
}

const buttonComponent: React.FC<ButtonComponentProps> = ({
  title,

}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonSignUp}>
        <Text style={styles.buttonSignUpText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default buttonComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
