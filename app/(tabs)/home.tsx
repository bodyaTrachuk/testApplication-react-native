import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../../constants/icons";
import { useTranslation } from "react-i18next";
import dynamicPosts from "../../constants/dynamicPosts";
import styles from "../../styles/homeStyle";
import { AuthContext } from "@/context/AuthContext";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface ProductItemsProps {
  data: Post;
}

const ProductItems: React.FC<ProductItemsProps> = ({ data }) => {
  return (
    <TouchableOpacity style={styles.posts}>
      <Text style={styles.productItemsId}>{data.title}</Text>
      <Text style={styles.productItemsBody}>{data.body}</Text>
    </TouchableOpacity>
  );
};

const home: React.FC = () => {
  const { t } = useTranslation();
  const authContext = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.userContainer}>
          <Text style={styles.userTitle}>{t("your name")}</Text>
          {/* <Text style={styles.userName}>User Name</Text> */}
          <Text style={styles.userName}>
            {authContext?.user?.name || "User name"}
          </Text>
        </View>
        <View style={styles.testTask}>
          <View>
            <Text style={styles.testTaskUpperText}>{t("test task")}</Text>
            <Text style={styles.testTaskBottomText}>Lorem ipsum</Text>
          </View>
          <View style={styles.testTaskBottomBlock}>
            <Text style={styles.testTaskBottomBlockText}>
              {t("go to call")}
            </Text>
            <Image source={icons.yellowArrowAngle} />
          </View>
        </View>
        <View style={styles.beforeYouStartContainer}>
          <Text style={styles.beforeYouStartTitle}>
            {t("before you start")}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.firstSection}>
              <View style={styles.firstSectionUpBlock}>
                <Image source={icons.icon1} />
                <View>
                  <Text style={styles.firstSectionUpBlockText}>
                    Lorem ipsum
                  </Text>
                  <Text style={styles.firstSectionUpBlockText}>
                    lorem ipsum
                  </Text>
                </View>
              </View>
              <View style={styles.firstSectionDownBlock}>
                <Text style={styles.firstSectionDownBlockText}>2 steps</Text>
                <Image source={icons.whiteArrow} />
              </View>
            </View>
            <View style={styles.secondSection}>
              <View style={styles.secondSectionUpBlock}>
                <Image source={icons.icon2} />
                <View>
                  <Text style={styles.secondSectionUpBlockText}>
                    Lorem ipsum
                  </Text>
                  <Text style={styles.secondSectionUpBlockText}>
                    lorem ipsum
                  </Text>
                </View>
              </View>
              <View style={styles.secondSectionDownBlock}>
                <Text style={styles.secondSectionDownBlockText}>3 steps</Text>
                <Image source={icons.whiteArrow} />
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.postsContainer}>
          <Text>{t("posts")}</Text>
          <ScrollView style={styles.scrollView}>
            {dynamicPosts &&
              dynamicPosts.map((item) => (
                <ProductItems key={item.id} data={item} />
              ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
