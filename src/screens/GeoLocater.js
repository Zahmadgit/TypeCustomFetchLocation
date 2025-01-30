import React, {useState} from 'react';
import {View, Text, StyleSheet, PermissionsAndroid, TouchableOpacity, Linking} from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import { SafeAreaView, Button } from 'react-native';

const GeoLocater = () => {

const Permission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
            title: 'Cool Photo App Location Permission',
            message:
                'Cool Photo App needs access to your Location ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the Location');
            getCurrentLocation();
        } else {
            console.log('Location permission denied');
        }
        } catch (err) {
        console.warn(err);
        }
    };

    const [currentLocation, setCurrentLocation] = useState(null);
    
    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                const {latitude, longitude} = position.coords;
                setCurrentLocation({latitude, longitude});
                console.log(latitude, longitude)

            },
            error => alert('Error', error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000}
        )
    }
    const openMaps = () =>{
        const {latitude, longitude} = currentLocation;
        if (latitude, longitude){
            const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
            Linking.openURL(url);
        } else {
            alert('Need location')
        }

    }
    return (
        
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Coordinates</Text>
            <Text style={styles.item}>Latitude : {currentLocation ?  currentLocation.latitude : 'Loading...'}</Text>
            <Text style={styles.item}>Longitude : {currentLocation ?  currentLocation.longitude : 'Loading...'}</Text>

            <Button title="request permissions" onPress={Permission} />
            </View>
            
            {currentLocation ? (
                    <>
                        <TouchableOpacity onPress={openMaps}>
                            <View style={styles.buttonStuff}>
                                <Text style={styles.textStuff}>Open Maps</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                ):(
                    <>
                        <TouchableOpacity onPress={Permission}>
                            <View style={styles.buttonStuff}>   
                                <Text style={styles.textStuff}>Get Location</Text>
                            </View>
                        </TouchableOpacity>
                    </> 
            )}
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

