import React, { useEffect, useState, useRef } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { watchLocation, stopWatchingLocation } from '../helper/LocationHelpers';



const Maps = ({ route }) => {
    const initialLocation = route.params ;
    const [currentLocation, setCurrentLocation] = useState(initialLocation);
  
    useEffect(() => {
      const watchId = watchLocation(
        (newLocation) => setCurrentLocation(newLocation),
       
      );
  
      return () => stopWatchingLocation(watchId);
    }, []);
  
    return (
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={currentLocation} // Marker moves with updated coordinates
          title="Your Location"
          description={`Lat: ${currentLocation.latitude}, Lng: ${currentLocation.longitude}`}
          image={require('../../assets/smiley.png')}
        />      
        </MapView>
    );
  };
  

export default Maps;

