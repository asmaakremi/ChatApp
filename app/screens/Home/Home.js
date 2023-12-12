import { Container, Icon } from "native-base";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { COLORS } from "../../components/Constant/Color";
import { FONTS } from "../../components/Constant/Font";
import HomeHeader from "../../components/Header/HomeHeader";
import firebase from "../../config"; // Assuming you have firebase configured
import { useNavigation } from "@react-navigation/native";

const database = firebase.database();

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const profilsSnapshot = await database.ref("profils").once("value");
        const profilsData = profilsSnapshot.val();

        if (profilsData) {
          // Convert the object of profiles into an array
          const profilesArray = Object.keys(profilsData).map((key) => ({
            id: key,
            ...profilsData[key],
          }));
          setProfiles(profilesArray);
        }
      } catch (error) {
        console.error("Error fetching profiles:", error.message);
      }
    };

    fetchProfiles();
  }, []);

  const handleProfilePress = (profile) => {
    // Navigate to the chat screen and pass the selected profile
    navigation.navigate("chat", { profile });
  };

  const renderItem = ({ item }) => (
    <ListItem
      containerStyle={{ paddingVertical: 8, marginVertical: 0 }}
      onPress={() => navigation.navigate("SingleChat", { data: item })}
    >
      <Avatar
        source={{ uri: item.avatar_url }}
        rounded
        title={item.name}
        size="medium"
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontFamily: FONTS.Medium, fontSize: 14 }}>
          {item.name}
        </ListItem.Title>
        <ListItem.Subtitle
          style={{ fontFamily: FONTS.Regular, fontSize: 12 }}
          numberOfLines={1}
        >
          {item.subtitle}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <Container style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <HomeHeader />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={profiles}
        renderItem={renderItem}
      />
      <TouchableOpacity
        style={styles.but}
        onPress={() => navigation.navigate("AllUser")}
      >
        <Icon
          name="users"
          type="FontAwesome5"
          style={{ color: COLORS.white, fontSize: 20 }}
        />
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  but: {
    position: "absolute",
    bottom: 15,
    right: 15,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.theme,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
