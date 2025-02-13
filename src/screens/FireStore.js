import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux'
import {addUserRequest, fetchUsersRequest} from '../store/firestoreSlice'


const FireStore = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {users, loading} = useSelector(state => state.firestore);
    const dispatch = useDispatch()

    // Function to add a user to Firestore
    const addUser =  () => {
        if (name && email) {
            dispatch(addUserRequest({name, email}))
            setEmail('')
            setName('')
        } else {
            alert('Enter name and email')
        }
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Users</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter name"
            value={name}
            onChangeText={setName}
        />
        <TextInput
            style={styles.input}
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
        />
        <Button title="Add User" onPress={addUser} disabled={loading} />

        <FlatList
            data={users}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <View style={styles.user}>
                <Text>{item.name}</Text>
                <View style={{borderBottomWidth: 1}}></View>
                <Text>{item.email}</Text>
            </View>
            )}
        />

        {loading && <Text>~Loading~</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  user: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
  },
});

export default FireStore;