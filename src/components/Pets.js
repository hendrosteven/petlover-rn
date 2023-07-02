import { View, FlatList, Text, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import PetCard from "./PetCard";
import { AppContext } from "../contexts/AppContext";

const Pets = ({ records }) => {
  const { path, page, isEmpty } = useContext(AppContext);
  const [pageValue, setPageValue] = page;
  const [pathValue, setPathValue] = path;
  const [isEmptyValue, setIsEmptyValue] = isEmpty;

  const renderFooter = () => {
    return (
      <View className="items-center pt-4 pb-8">
        <TouchableOpacity
          onPress={() => {
            const strPath = pathValue.split("&");
            setPathValue(`${strPath[0]}&page=${pageValue}`);
          }}
        >
          {!isEmptyValue ? (
            <Text className="text-orange-400 font-bold">Load More</Text>
          ) : (
            <Text className="text-gray-400 font-bold">No more data..</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View className="bg-white" style={{ height: "92%" }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={records}
        renderItem={({ item, index }) => (
          <PetCard
            key={index}
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
        ListFooterComponent={renderFooter}
      ></FlatList>
    </View>
  );
};

export default Pets;
