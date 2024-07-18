import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F2F3F5",
    // gap: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    gap: 20,
  },
  userContainer: {
    width: "100%",
    height: 296,
    backgroundColor: "#FA8A34",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    color: "white",
    fontSize: 28,
  },
  userTitle: {
    color: "white",
    fontSize: 13,
  },
  // Test Task Section
  testTask: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 30,
    gap: 10,
  },
  testTaskUpperText: {
    fontSize: 15,
    fontWeight: "500",
  },
  testTaskBottomText: {
    fontSize: 13,
    color: "#858C94",
  },
  testTaskBottomBlock: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  testTaskBottomBlockText: {
    color: "#FA8A34",
    fontSize: 15,
    fontWeight: "500",
  },
  // Before you start
  beforeYouStartContainer: {
    width: "90%",
  },
  beforeYouStartTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#606773",
    marginBottom: 10,
  },
  firstSection: {
    width: 240,
    backgroundColor: "#636363",
    borderRadius: 16,
    padding: 30,
    marginRight: 10,
    gap: 10,
  },
  firstSectionUpBlock: {
    flexDirection: "row",
    gap: 10,
  },
  firstSectionUpBlockText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  firstSectionDownBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  firstSectionDownBlockText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  // Second Section
  secondSection: {
    width: 240,
    backgroundColor: "#EE6363",
    borderRadius: 16,
    padding: 30,
    marginRight: 10,
    gap: 10,
  },
  secondSectionUpBlock: {
    flexDirection: "row",
    gap: 10,
  },
  secondSectionUpBlockText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  secondSectionDownBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  secondSectionDownBlockText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#606773",
  },
  scrollView: { width: "100%" },
  postsContainer: {
    width: "90%",
    alignSelf: "center",
  },
  posts: {
    width: "100%",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginVertical: 10,
    gap: 10,
  },
  productItemsId: {
    fontSize: 15,
    fontWeight: "500",
    color: "#06070A",
  },
  productItemsBody: {
    fontSize: 13,
    fontWeight: "400",
    color: "#858C94",
  },
});

export default styles;