import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  settingTitle: {
    fontSize: 22,
    fontWeight: "600",
    alignSelf: "flex-start",
    padding: 23,
  },
  titles: { fontSize: 15, fontWeight: "500" },
  userContainer: {
    width: "90%",
    height: 80,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#CED5E0",
    borderRadius: 16,
    gap: 10,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
  settingBlock: {
    gap: 10,
    marginBottom: 15,
  },
  settingBlockTitle: {
    paddingLeft: 5,
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
});

export default styles;
