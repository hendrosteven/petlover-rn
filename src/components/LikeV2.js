import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { HeartIcon } from "react-native-heroicons/solid";
import { HeartIcon as HeartIconOutline } from "react-native-heroicons/outline";
import useAsyncStorage from "../hooks/useAsyncStorage";

const LikeV2 = ({ id, likes }) => {
  const [isLike, setIsLike] = useAsyncStorage(id);
  const [likesValue, setLikesValue] = useState(likes);

  return (
    <TouchableOpacity
      onPress={() => {
        if (isLike.like) setLikesValue(likesValue + 1);
        if (!isLike.like) setLikesValue(likes);
        const data = {
          like: !isLike.like,
          likes: likesValue,
        };
        setIsLike(data);
      }}
    >
      <View className="flex-row items-center space-x-2 pt-2 pb-2 px-2">
        {isLike?.like ? (
          <HeartIcon color="red" />
        ) : (
          <HeartIconOutline color="red" />
        )}
        <Text>{isLike?.likes} peoples love this</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LikeV2;
