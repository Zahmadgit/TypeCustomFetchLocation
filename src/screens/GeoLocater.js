import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, PermissionsAndroid, TouchableOpacity, Linking, Platform} from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import { SafeAreaView, Button } from 'react-native';
import { requestLocationPermission, getCurrentLocation, openMaps } from '../helper/LocationHelpers';
import MapView from 'react-native-maps';
import auth from '@react-native-firebase/auth'
import { logoutRequest } from '../store/authSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const GeoLocater = ({navigation}) => {
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.auth);
    const [currentLocation, setCurrentLocation] = useState(null);
    const handleGetLocation = async () => {
        const hasPermission = await requestLocationPermission();
        if (hasPermission) {
            try {
                const location = await getCurrentLocation();
                setCurrentLocation(location);
            } catch (error) {
                console.error("Error getting location:", error);
            }
        } else {
            console.warn("Location permission denied");
        }
    }

    const handleLogout = () =>{
        if(!loading){
        dispatch(logoutRequest())
        }
    }
    return (
        
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Coordinates</Text>
            <Text style={styles.item}>Latitude : {currentLocation ?  currentLocation.latitude : 'Loading...'}</Text>
            <Text style={styles.item}>Longitude : {currentLocation ?  currentLocation.longitude : 'Loading...'}</Text>

            <Button title="request permissions" onPress={handleGetLocation} />
            <Button title="open Maps" onPress={() => currentLocation && openMaps(currentLocation)} />
            <Button title="Go to Bruh" onPress={() => navigation.navigate("Bruh")} />
            <Button title="Go to Maps" onPress={() => currentLocation && navigation.navigate("Maps",{location: currentLocation})} />
            <Button title="Logout" onPress={handleLogout} disabled = {loading} />

            </View>



        </SafeAreaView>
    
    )
}


const styles = StyleSheet.create({
    map: {
        flex: 1,
        margin: 10,
        borderRadius: 15,
      },
    container: {
        marginTop: '50%',
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        borderWidth: 2,
        borderRadius: 50
      
        
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

