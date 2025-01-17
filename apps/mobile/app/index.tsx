import * as React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { api } from 'backend-api'
import { useEffect } from "react";

export default function Screen() {

  const fetchApi = async () => {
    const { data } = await api.index.get()
    console.log(data)
  }

  useEffect(() => {
    fetchApi()
  }, [])


  return (
    <View className="flex-1 items-center justify-center">
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
 
    </View>
  );
}
