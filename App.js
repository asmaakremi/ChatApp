import React, { useEffect, useState } from "react";
import AppStack from "./app/Navigation/AppStack";
import AuthStack from "./app/Navigation/AuthStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

export default function App() {
  // const dispatch = useDispatch();

  // const { userData, login } = useSelector(state => state.User);

  // const [loginChk, setloginChk] = useState(true);

  // useEffect(() => {
  //   getUser();
  // }, []);

  // const getUser = async () => {
  //    let data = await Auth.getAccount();
  //    if (data != null) {
  //       dispatch(setUser(data));
  //       setloginChk(false)
  //    }else{
  //       setloginChk(false)
  //    }
  // }

  // if (loginChk) {
  //   return null;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        detachInactiveScreens={false}
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Auth" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
