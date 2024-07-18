import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import icons from "../../constants/icons";
import { useTranslation } from "react-i18next";

interface TabIconProps {
  icon: ImageSourcePropType;
  color?: string;
  name: string;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image source={icon} resizeMode="contain" tintColor={color} />
      <Text style={{ color: color, fontSize: 10 }}>{name}</Text>
    </View>
  );
};

export default function TabLayout() {
  const { t } = useTranslation();
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            borderTopWidth: 1,
            borderTopColor: "#FFFFFF",
            height: 55,
            gap: 10,
            paddingBottom: 10,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon icon={icons.homeIcon} color={color} name={t("home")} />
            ),
          }}
        />
        <Tabs.Screen
          name="portfolio"
          options={{
            title: "Portfolio",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.portfolioIcon}
                color={color}
                name={t("portfolio")}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon
                icon={icons.searchIcon}
                color={color}
                name={t("search")}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon icon={icons.profileIcon} color={color} name={t('profile')} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
