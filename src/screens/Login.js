import React from 'react';
import { View, Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={() => dispatch(login())} />
      <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default Login