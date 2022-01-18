import "react-native-gesture-handler";
import React from "react";
import Toast from 'react-native-toast-message';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";
import { StyleSheet} from "react-native";
import { Icon} from "react-native-elements";
import HomeScreen from "./HomeScreen";
import NewScreen from "./NewScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#228CDB",
          },
          headerTintColor: "#fff",
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Icon
                name="plus"
                type="feather"
                color="#fff"
                style={style.headerIcon}
                onPress={() => navigation.navigate('New')}
              />
            ),
          })}
        />
        <Stack.Screen name="New" component={NewScreen} />
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.forwardRef(ref)} />

    </NavigationContainer>
  );
}
const style = StyleSheet.create({
  headerIcon: {
    marginRight: 10,
  },
});
