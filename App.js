import React, { useState, useContext } from "react";
import { HomeScreen, DetailScreen } from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppContext } from "./src/contexts/AppContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [pathValue, setPathValue] = useState("/post?limit=20&page=0");
  const [pageValue, setPagevalue] = useState(0);
  const [recordsValue, setRecordsValue] = useState([]);
  const [isEmptyValue, setIsEmptyValue] = useState(false);

  return (
    <AppContext.Provider
      value={{
        path: [pathValue, setPathValue],
        page: [pageValue, setPagevalue],
        records: [recordsValue, setRecordsValue],
        isEmpty: [isEmptyValue, setIsEmptyValue],
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
