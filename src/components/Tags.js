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
      <TagItem title="Dog" fromHome={true} />
      <TagItem title="Golden retriever" fromHome={true} />
      <TagItem title="Cat" fromHome={true} />
      <TagItem title="Animal" fromHome={true} />
      <TagItem title="Canine" fromHome={true} />
      <TagItem title="Puppy" fromHome={true} />
      <TagItem title="Beach" fromHome={true} />
    </ScrollView>
  );
};

export default Tags;
