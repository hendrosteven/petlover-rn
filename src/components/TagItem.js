import { TouchableOpacity, Text, View } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigation } from "@react-navigation/native";

const TagItem = ({ title, fromHome }) => {
  const { path, page } = useContext(AppContext);
  const [pathValue, setPathValue] = path;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="mr-2 px-4 pt-2 pb-2 bg-orange-400 rounded-2xl"
      onPress={() => {
        setPathValue(`/tag/${title.toLowerCase()}/post?limit=20`);
        if (!fromHome) {
          navigation.navigate("Home");
        }
      }}
    >
      <Text className="text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default TagItem;
