import { View, ScrollView, FlatList } from "react-native";
import React, { useState, useContext } from "react";
import PetCard from "./PetCard";
import { AppContext } from "../contexts/AppContext";

const Pets = ({ records }) => {
  const { path, page } = useContext(AppContext);
  const [pageValue, setPageValue] = page;
  const [pathValue, setPathValue] = path;

  return (
    <View className="bg-white" style={{ height: "92%" }}>
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
