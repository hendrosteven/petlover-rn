import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Header, TagItem } from "../components";
import {
  HeartIcon,
  HandThumbDownIcon,
  ChevronLeftIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const DetailScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <View className="flex-row">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon color="orange" />
        </TouchableOpacity>
        <Header />
      </View>

      <ScrollView>
        <View className="flex-row items-center pb-2 space-x-2 px-2">
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/women/58.jpg",
            }}
            className="w-10 h-10 rounded-full"
          />
          <View>
            <Text className="font-bold">Hendro Steven</Text>
            <Text className="text-xs text-gray-500">
              2020-05-24T14:53:17.598Z
            </Text>
          </View>
        </View>
        <Image
          source={{
            uri: "https://img.dummyapi.io/photo-1581804928342-4e3405e39c91.jpg",
          }}
          className="w-max h-52"
        />
        <View className="pt-2 pb-2 bg-gray-200">
          <Text className="mt-2 mx-2 mb-2">
            Hiking with my dog in the woods. black labrador re...
          </Text>
        </View>
        <View className="flex-row px-2 pt-4">
          <TagItem title="Dog" />
          <TagItem title="Pets" />
          <TagItem title="Nature" />
        </View>
        <View className="flex-row items-center space-x-2 pt-4 pb-2 px-2">
          <HeartIcon color="red" />
          <Text>45 peoples love this</Text>
        </View>
      </ScrollView>
      <TouchableOpacity className="mx-2 pt-4 pb-5 items-center bg-orange-400 rounded-2xl">
        <Text className="text-white font-bold text-lg">I Love This</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailScreen;
