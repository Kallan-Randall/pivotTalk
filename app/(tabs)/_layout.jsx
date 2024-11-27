import { View, Text } from 'react-native'
import { Tabs, redirect } from 'expo-router';
const TabsLayout = () => {
  return (

    <>
    <Tabs>
      <Tabs.Screen 
        name="home"
        options={{
          title: "Home",
          headerShown: false,
        }}
        />
      <Tabs.Screen 
        name="fields"
        options={{
          title: "Fields",
          headerShown: false,
        }}
        />r
      <Tabs.Screen 
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
        />
        
    </Tabs>
  </>
  )
}

export default TabsLayout