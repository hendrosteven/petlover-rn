import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAsyncStorage = (key) => {
  const [storedValue, setStoredValue] = useState();

  async function getStoredItem(key) {
    try {
      const item = await AsyncStorage.getItem(key);
      const value = item ? JSON.parse(item) : false;
      setStoredValue(value);
      console.log(`STORED_KEY: ${key} : ${value}`);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getStoredItem(key);
  }, [key]);

  const setValue = async (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useAsyncStorage;
