import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const FireStore = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    // Function to add a user to Firestore
    const addUser = async () => {
        if (name && email) {
        setLoading(true);
        try {
            //setting email to be doc identifier
            await firestore().collection('Users').doc(email).set({
            name,
            email,
            });
            setName('');
            setEmail('');
            alert('User added successfully');
            //refresh users
            fetchUsers();
        } catch (error) {
            alert('Error adding user', error);
        }
        setLoading(false);
        } else {
        alert('Please provide both name and email');
        }
    };

    const fetchUsers = async () => {
        setLoading(true);
        try {
        const snapshot = await firestore().collection('Users').get();
        const usersList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        setUsers(usersList);
        } catch (error) {
            alert('Error Fetching users', error);
        }
        setLoading(false);
    };

    //just for component mounting
    useEffect(() => {
        fetchUsers();
    }, []);

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