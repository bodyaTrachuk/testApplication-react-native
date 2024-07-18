import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import styles from "@/styles/searchStyle";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
import searchPosts from "../../constants/searchPosts";
import { useTranslation } from "react-i18next";

interface Post {
  id: number;
  title: string;
}

interface ProductItemsProps {
  data: Post;
}

const ProductItems: React.FC<ProductItemsProps> = ({ data }) => {
  return (
    <View style={styles.productItems}>
      <Text style={styles.productItemsId}>ID: {data.id}</Text>
      <Text style={styles.productItemsName}>Name: {data.title}</Text>
    </View>
  );
};

// const fetchPost = async (): Promise<Post[]> => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts?_limit=15"
//   );
//   return response.data;
// };

const Search: React.FC = () => {
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["post"],
  //   queryFn: fetchPost,
  // });

  // if (isLoading) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }

  // if (error) {
  //   return (
  //     <View>
  //       <Text>Error: {(error as Error).message}</Text>
  //     </View>
  //   );
  // }
  const { t } = useTranslation();
  const [filterData, setFilterData] = useState<Post[]>(searchPosts);

  const onChange = (text: string) => {
    if (text === "") {
      setFilterData(searchPosts);
    } else {
      const filteredPosts = searchPosts.filter((post) =>
        post.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilterData(filteredPosts);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.containerTitle}>{t("search")}</Text>
        <View style={styles.searchInput}>
          <Image source={icons.searchIcon} style={styles.image} />
          <TextInput
            style={styles.textInput}
            placeholder={t("search Products")}
            onChangeText={(text) => onChange(text)}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {filterData &&
          filterData.map((item) => <ProductItems key={item.id} data={item} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;


