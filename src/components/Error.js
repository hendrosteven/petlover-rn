import { View, Text, Image } from "react-native";

const Error = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={{
          url: "https://freepngimg.com/download/dog/138764-dog-black-labrador-sad-free-clipart-hq.png",
        }}
        className="w-52 h-36 opacity-50"
      />
      <Text className="text-lg text-gray-500">Something went wrong..</Text>
    </View>
  );
};

export default Error;
