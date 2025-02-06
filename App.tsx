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
import Navigation from './src/navigation/Navigation';
import Store from './src/store/Store';


function App(): React.JSX.Element {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Navigation></Navigation>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
