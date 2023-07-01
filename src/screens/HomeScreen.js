import {
  View,
  SafeAreaView,
  Image,
  TextInput,
  Text,
  ActivityIndicator,
} from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { Error, Header, Loading, Pets, Tags } from "../components/";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import useAxios from "../hooks/useAxios";

const HomeScreen = () => {
  const { path, page } = useContext(AppContext);
  const [pathValue, setPathValue] = path;
  const [records, setRecords] = useState([]);

  const { response, loading, error } = useAxios({
    method: "get",
    url: pathValue,
  });

  useEffect(() => {
    console.log(`RESPONSE: ${response?.data.length}`);
    if (response !== null) {
      setRecords(response.data);
    }
    console.log(`RECORD: ${records.length}`);
  }, [response]);

  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <Header />
      <View className="flex-row items-center space-x-2 pb-2 px-2">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-lg">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder="Find a cute pet" keyboardType="default" />
        </View>
      </View>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <View className="bg-gray-200">
            <View>
              <Tags />
            </View>
            <View className="px-2 pt-4 pb-4 bg-white">
              <Pets records={records} />
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
