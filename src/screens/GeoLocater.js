import React, {useState} from 'react';
import {View, Text, StyleSheet, PermissionsAndroid, TouchableOpacity, Linking} from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import { SafeAreaView, Button } from 'react-native';
import { requestLocationPermission, getCurrentLocation, openMaps } from '../helper/LocationHelpers';


const GeoLocater = () => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const handleGetLocation = async () => {
        const hasPermission = await requestLocationPermission();
        if (hasPermission){
            const location = await getCurrentLocation();
            setCurrentLocation(location);
        } else {
            console.log("Location permission super denied lol get rekted")
        }
    }
    return (
        
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Coordinates</Text>
            <Text style={styles.item}>Latitude : {currentLocation ?  currentLocation.latitude : 'Loading...'}</Text>
            <Text style={styles.item}>Longitude : {currentLocation ?  currentLocation.longitude : 'Loading...'}</Text>

            <Button title="request permissions" onPress={handleGetLocation} />
            <Button title="open Maps" onPress={() => openMaps(currentLocation)} />
            </View>
        </SafeAreaView>
    
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: '50%',
        backgroundColor: 'red',
        padding: 10,
        margin: 10,
        alignItems: 'center'
      },
      item: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      buttonStuff:{
        backgroundColor: 'blue',
        padding: 10,
        margin: 10,
        alignItems: 'center',
      },
        textStuff:{
            color: 'white',
        }
})


export default GeoLocater;

