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

const HomeScreen = () => {
  const navigation = useNavigation();

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
      <ScrollView showsVerticalScrollIndicator={false} className="bg-gray-200">
        <Tags />
        <View className="px-2 pt-2 bg-white">
          <Pets />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
