import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const PetCard = ({
  id,
  image,
  likes,
  text,
  publishDate,
  firstName,
  lastName,
  ownerPicture,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white shadow pt-2 mb-4"
      onPress={() => navigation.navigate("Detail", { itemId: id })}
    >
      <View className="flex-row items-center pb-2 space-x-2 px-2">
        <Image
          source={{ uri: ownerPicture }}
          className="w-10 h-10 rounded-full"
        />
        <View>
          <Text className="font-bold">
            {firstName} {lastName}
          </Text>
          <Text className="text-xs text-gray-500">{publishDate}</Text>
        </View>
      </View>
      <Image source={{ uri: image }} className="h-44 w-max rounded-sm" />
      <View className="pt-2 pb-2 bg-gray-200">
        <Text className="px-2">{text}</Text>
      </View>
      <View className="flex-row items-center space-x-2 pt-2 pb-2 px-2">
        <HeartIcon color="red" />
        <Text>{likes} peoples love this</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PetCard;
