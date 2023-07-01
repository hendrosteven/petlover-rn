import { TouchableOpacity, Image, Text } from "react-native";
import React from "react";

const TagItem = ({ title }) => {
  return (
    <TouchableOpacity className="mr-2 px-4 pt-2 pb-2 bg-orange-400 rounded-2xl">
      <Text className="text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default TagItem;
