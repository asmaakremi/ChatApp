import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { COLORS } from "../components/Constant/Color";
import Home from "../screens/Home/Home";
import AllUser from "../screens/User/User";
import SingleChat from "../screens/Home/SingleChat";
const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: COLORS.button },
        gestureEnabled: true,
        backgroundColor: COLORS.button,
        gestureDirection: "horizontal",
      }}
      initialRouteName="Home"
      headerMode="none"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllUser" component={AllUser} />
      <Stack.Screen name="SingleChat" component={SingleChat} />
    </Stack.Navigator>
  );
}
