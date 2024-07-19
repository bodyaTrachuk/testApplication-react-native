import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import styles from "@/styles/searchStyle";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Post, fetchPost } from "../../api/fetchPosts";

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

const Search: React.FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: () => fetchPost(15),
  });

  const { t } = useTranslation();
  const [filterData, setFilterData] = useState<Post[]>([]);

  useEffect(() => {
    if (data) {
      setFilterData(data);
    }
  }, [data]);

  const onChange = (text: string) => {
    if (!data) return;

    if (text === "") {
      setFilterData(data);
    } else {
      const filteredPosts = data.filter((post) =>
        post.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilterData(filteredPosts);
    }
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <ActivityIndicator size="large" color="#C1C4CB" />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Text>Error: {(error as Error).message}</Text>
      </View>
    );
  }

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
        {filterData.map((item) => (
          <ProductItems key={item.id} data={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
