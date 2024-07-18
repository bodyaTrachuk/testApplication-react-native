import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 20,
    },
    headerTitle: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-start",
      gap: 10,
    },
    textInput: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    submitButton: {
      width: "100%",
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonSignUp: {
      width: "100%",
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
    arrowIcon: {
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "flex-start",
      marginVertical: 10,
      borderRadius: 20,
    },
    // inputs
    label: {
      fontSize: 15,
      marginLeft: 10,
      color: "#606773",
      alignSelf: "flex-start",
      marginVertical: 10,
    },
    labelError: {
      fontSize: 15,
      marginLeft: 10,
      color: "#ff1500",
      alignSelf: "flex-start",
      marginVertical: 10,
    },
    input: {
      position: "relative",
      justifyContent: "center",
      width: "100%",
      height: 56,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 16,
      paddingHorizontal: 8,
      color: "#333",
    },
    inputError: {
      position: "relative",
      justifyContent: "center",
      width: "100%",
      height: 56,
      borderColor: "#ff0000",
      borderWidth: 1,
      borderRadius: 16,
      paddingHorizontal: 8,
      color: "#333",
    },
    InputIconRight: {
      borderRadius: 15,
      position: "absolute",
      right: 10,
      top: -25,
    },
    InputIconLeft: {
      position: "absolute",
      left: 10,
      top: -25,
    },
  });

  export default styles