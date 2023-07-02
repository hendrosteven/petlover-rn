import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { HeartIcon } from "react-native-heroicons/solid";
import { HeartIcon as HeartIconOutline } from "react-native-heroicons/outline";

const Like = ({ id, likes }) => {
  const [like, setLike] = useState(false);
  const [likesValue, setLikesValue] = useState(likes);

  return (
    <TouchableOpacity
      onPress={() => {
        if (!like) setLikesValue(likesValue + 1);
        if (like) setLikesValue(likesValue - 1);
        setLike(!like);
      }}
    >
      <View className="flex-row items-center space-x-2 pt-2 pb-2 px-2">
        {like ? <HeartIcon color="red" /> : <HeartIconOutline color="red" />}
        <Text>{likesValue} peoples love this</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Like;
