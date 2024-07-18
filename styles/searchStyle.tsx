import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F2F3F5",
    justifyContent: "center",
  },
  searchContainer: { marginBottom: 20 },
  containerTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#06070A",
    padding: 20,
  },
  searchInput: {
    position: "relative",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    top: 13,
    left: 25,
  },
  textInput: {
    width: "95%",
    height: 56,
    borderWidth: 1,
    borderRadius: 16,
    paddingLeft: 50,
    borderColor: "#CED5E0",
  },
  scrollViewContent: {
    alignItems: "center",
  },
  productItems: {
    width: "95%",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    padding: 20,
    gap: 5,
    marginVertical: 10,
  },
  productItemsId: { fontSize: 15, fontWeight: "500", color: "#06070A" },
  productItemsName: { fontSize: 13, fontWeight: "400", color: "#858C94" },
});

export default styles;
