import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { Header, Pets, Tags } from "../components/";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";

const HomeScreen = () => {
  const navigation = useNavigation();

  const { response, loading, error } = useAxios({
    method: "get",
    url: "/post?limit=10",
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response);
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
          <Pets records={response} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
