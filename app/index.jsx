import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    
  return (
    <View className="flex-1 items-center justify-center">
      <Text className=" text-3xl font-space">PivotTalk</Text>
      <Link href="/home">Go To Home</Link>
    </View>
  );
}
