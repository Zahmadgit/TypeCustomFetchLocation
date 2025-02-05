import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  PermissionsAndroid,

} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from 'react-redux';


import Store from './src/store/Store';
import GeoLocater from './src/screens/GeoLocater';
import Bruh from './src/screens/Bruh';
import Comp1 from './src/screens/Comp1';
import Comp2 from './src/screens/Comp2';
import Comp3 from './src/screens/Comp3';
import Maps from './src/screens/Maps';
import hocclasstester from './src/screens/hocclasstester';


const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={Store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="GeoLocater">
      <Stack.Screen name="GeoLocater" component={GeoLocater} />
      <Stack.Screen name="Bruh" component={Bruh} />
      <Stack.Screen name="Comp1" component={Comp1} />
      <Stack.Screen name="Comp2" component={Comp2} />
      <Stack.Screen name="Comp3" component={Comp3} />
      <Stack.Screen name="hocclasstester" component={hocclasstester} />
      <Stack.Screen name="Maps" component={Maps} />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
