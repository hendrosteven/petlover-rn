import { View, ScrollView, FlatList } from "react-native";
import React from "react";
import PetCard from "./PetCard";

const Pets = ({ records }) => {
  return (
    <View className="bg-white">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={records}
        renderItem={({ item }) => (
          <PetCard
            id={item.id}
            image={item.image}
            likes={item.likes}
            text={item.text}
            publishDate={item.publishDate}
            firstName={item.owner.firstName}
            lastName={item.owner.lastName}
            ownerPicture={item.owner.picture}
          />
        )}
        className="space-y-2"
      ></FlatList>
    </View>
  );
};

export default Pets;
