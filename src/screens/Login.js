import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../store/authSlice'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {error} = useSelector((state) => state.auth);
    
    //some error to do with the navigation stack applying multiple error alerts
    useEffect(() => {
        if (error) {
        Alert.alert('Error', error);
        }
    }, [error]);

    const handleLogin = () => {
        dispatch(loginRequest({ email, password }));
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
            style={styles.input}
            placeholder="enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
        />
        <TextInput
            style={styles.input}
            placeholder="enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <Button title="Login" onPress={handleLogin}/>
        <Button 
            title="Go to Signup" 
            onPress={() => navigation.navigate('Signup')} 
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: "center", 
        padding: 10
    },
    title: { 
        fontSize: 20, 
        fontWeight: "bold", 
        textAlign: "center", 
        marginBottom: 10 
    },
    input: { 
        borderWidth: 1, 
        padding: 10, 
        marginBottom: 10, 
        borderRadius: 10 
    },
});

export default Login;