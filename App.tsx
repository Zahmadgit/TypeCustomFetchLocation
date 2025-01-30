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
import GeoLocater from './src/screens/GeoLocater';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <GeoLocater></GeoLocater>
    </SafeAreaView>
  );
}


export default App;
