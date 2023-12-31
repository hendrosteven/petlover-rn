import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Error, Header, LikeV2, Loading, TagItem } from "../components";
import {
  HeartIcon,
  HandThumbDownIcon,
  ChevronLeftIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import useAxios from "../hooks/useAxios";
import { useState, useEffect } from "react";
import { Like } from "../components";

const DetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { itemId } = route.params;

  const { response, loading, error } = useAxios({
    method: "get",
    url: `/post/${itemId}`,
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);

  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <View className="flex-row">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon color="orange" />
        </TouchableOpacity>
        <Header />
      </View>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <ScrollView>
          <View className="flex-row items-center pb-2 space-x-2 px-2">
            <Image
              source={{
                uri: `${data?.owner?.picture}`,
              }}
              className="w-10 h-10 rounded-full"
            />
            <View>
              <Text className="font-bold">
                {data?.owner?.firstName} {data?.owner?.lastName}
              </Text>
              <Text className="text-xs text-gray-500">{data?.publishDate}</Text>
            </View>
          </View>
          <Image
            source={{
              uri: `${data?.image}`,
            }}
            className="w-max h-80"
          />
          <View className="pt-2 pb-2 bg-gray-200">
            <Text className="mt-2 mx-2 mb-2">{data?.text}</Text>
          </View>
          <View className="flex-row px-2 pt-4">
            {data?.tags?.map((tag, index) => {
              return <TagItem title={tag} key={index} fromHome={false} />;
            })}
          </View>
          <LikeV2 id={data?.id} likes={data?.likes} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default DetailScreen;
