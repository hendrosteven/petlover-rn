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
      <TagItem title="Dog" />
      <TagItem title="Golden retriever" />
      <TagItem title="Cat" />
      <TagItem title="Animal" />
      <TagItem title="Canine" />
      <TagItem title="Puppy" />
      <TagItem title="Beach" />
    </ScrollView>
  );
};

export default Tags;
