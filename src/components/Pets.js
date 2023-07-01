import { View, ScrollView } from "react-native";
import React from "react";
import PetCard from "./PetCard";

const Pets = () => {
  return (
    <View className="bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10 }}
        className="space-y-2"
      >
        <PetCard
          id="60d21b4667d0d8992e610c85"
          image="https://img.dummyapi.io/photo-1581804928342-4e3405e39c91.jpg"
          likes={42}
          text="Hiking with my dog in the woods. black labrador re..."
          publishDate="2020-05-23T22:56:11.424Z"
          firstName="Hendro"
          lastName="Steven"
          ownerPicture="https://randomuser.me/api/portraits/med/women/33.jpg"
        />
        <PetCard
          id="60d21b4667d0d8992e610c85"
          image="https://img.dummyapi.io/photo-1581804928342-4e3405e39c91.jpg"
          likes={42}
          text="Hiking with my dog in the woods. black labrador re..."
          publishDate="2020-05-23T22:56:11.424Z"
          firstName="Hendro"
          lastName="Steven"
          ownerPicture="https://randomuser.me/api/portraits/med/women/33.jpg"
        />
        <PetCard
          id="60d21b4667d0d8992e610c85"
          image="https://img.dummyapi.io/photo-1581804928342-4e3405e39c91.jpg"
          likes={42}
          text="Hiking with my dog in the woods. black labrador re..."
          publishDate="2020-05-23T22:56:11.424Z"
          firstName="Hendro"
          lastName="Steven"
          ownerPicture="https://randomuser.me/api/portraits/med/women/33.jpg"
        />
      </ScrollView>
    </View>
  );
};

export default Pets;
