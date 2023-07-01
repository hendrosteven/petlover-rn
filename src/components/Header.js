import { View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View className="flex-row items-center pb-3 space-x-2 px-2">
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1596/1596810.png",
        }}
        className="h-8 w-8 p-4"
      />
      <Text className="font-bold text-xl">Welcome PetLovers!</Text>
    </View>
  );
};

export default Header;
