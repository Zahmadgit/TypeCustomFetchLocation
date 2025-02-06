import React from 'react';
import { View, Button, Text } from 'react-native';

const Signup = ({ navigation }) => {
  return (
    <View>
      <Text>Signup Screen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Signup;