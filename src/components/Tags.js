import { ScrollView } from "react-native";
import React from "react";
import TagItem from "./TagItem";

const Tags = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 8,
        paddingTop: 8,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex-row bg-white"
    >
      <TagItem title="All" fromHome={true} key="all" />
      <TagItem title="Dog" fromHome={true} key="dog" />
      <TagItem title="Golden retriever" fromHome={true} key="golden" />
      <TagItem title="Cat" fromHome={true} key="cat" />
      <TagItem title="Animal" fromHome={true} key="animal" />
      <TagItem title="Canine" fromHome={true} key="canine" />
      <TagItem title="Puppy" fromHome={true} key="puppy" />
      <TagItem title="Beach" fromHome={true} key="beach" />
    </ScrollView>
  );
};

export default Tags;
