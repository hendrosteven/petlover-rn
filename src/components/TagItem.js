import { TouchableOpacity, Text } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const TagItem = ({ title }) => {
  const [path, setPath] = useContext(AppContext);
  return (
    <TouchableOpacity
      className="mr-2 px-4 pt-2 pb-2 bg-orange-400 rounded-2xl"
      onPress={() => setPath(`/tag/${title.toLowerCase()}/post?limit=10`)}
    >
      <Text className="text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default TagItem;
