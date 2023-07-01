import { View, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { Header, Pets, Tags } from "../components/";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import useAxios from "../hooks/useAxios";

const HomeScreen = () => {
  const [path, setPath] = useContext(AppContext);
  const [records, setRecords] = useState([]);

  const { response, loading, error } = useAxios({
    method: "get",
    url: path,
  });

  useEffect(() => {
    if (response !== null) {
      setRecords(response);
    }
  }, [response]);

  return (
    <SafeAreaView className="bg-white pt-8">
      <Header />

      {/** Search */}
      <View className="flex-row items-center space-x-2 pb-2 px-2">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-lg">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder="Find a cute pet" keyboardType="default" />
        </View>
      </View>

      {/** Body */}
      <View className="bg-gray-200">
        <View>
          <Tags />
        </View>
        <View className="px-2 pt-4 bg-white">
          <Pets records={records.data} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
