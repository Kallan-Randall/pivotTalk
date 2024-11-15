import {  Text, View } from 'react-native'
import { Stack } from 'expo-router'
import "../global.css";
import { useFonts } from 'expo-font';


const _layout = () => {
    const [fontsLoaded, error] = useFonts({
        "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf")
    })


  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}} />
    </Stack>
  )
}

export default _layout

