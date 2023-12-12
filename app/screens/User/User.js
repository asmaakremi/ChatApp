import { Container } from "native-base";
import React, { useState } from "react";
import { FlatList, StatusBar, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";
import { COLORS } from "../../Component/Constant/Color";
import { FONTS } from "../../Component/Constant/Font";
import { useNavigation } from "@react-navigation/native";
const [profiles, setProfiles] = useState([]);
const navigation = useNavigation;

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
const AllUser = () => {
  const [search, setsearch] = useState("");

  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      containerStyle={{ paddingVertical: 7, marginVertical: 2 }}
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
      <SearchBar
        placeholder="Search by name..."
        onChangeText={(val) => setsearch(val)}
        value={search}
        containerStyle={styles.searchContainer}
        inputStyle={styles.searchInput}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={profiles}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default AllUser;

const styles = StyleSheet.create({
  searchContainer: {
    elevation: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
  },
  searchInput: {
    fontSize: 15,
    fontFamily: FONTS.Regular,
    color: COLORS.black,
    opacity: 0.7,
  },
});
