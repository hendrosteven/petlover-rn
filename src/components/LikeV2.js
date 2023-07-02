import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { HeartIcon } from "react-native-heroicons/solid";
import { HeartIcon as HeartIconOutline } from "react-native-heroicons/outline";
import useAsyncStorage from "../hooks/useAsyncStorage";

const LikeV2 = ({ id, likes }) => {
  const [isLike, setIsLike] = useAsyncStorage(id);
  const [likesValue, setLikesValue] = useState(likes);

  return (
    <TouchableOpacity
      onPress={() => {
        if (!isLike) setLikesValue(likesValue + 1);
        if (isLike) setLikesValue(likesValue - 1);
        setIsLike(!isLike);
      }}
    >
      <View className="flex-row items-center space-x-2 pt-2 pb-2 px-2">
        {isLike ? <HeartIcon color="red" /> : <HeartIconOutline color="red" />}
        <Text>{likesValue} peoples love this</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LikeV2;
