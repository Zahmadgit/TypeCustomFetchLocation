import { PermissionsAndroid, Linking, Alert, Platform} from "react-native";
import Geolocation from "@react-native-community/geolocation";

export const requestLocationPermission = async () => {
  
  if(Platform.OS === 'ios'){
    return true;
  }

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location Permission",
        message: "This app needs access to your location to show your position on the map.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (error) {
    console.warn("Permission error:", error);
    return false;
  }
};



export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        Alert.alert("Error", error.message);
        reject(null);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000 }
    );
  });
};

export const watchLocation = (onLocationChange = () => {}, onError = () => {}) => {
  const watchId = Geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      onLocationChange({ latitude, longitude });
    },
    (error) => {
      onError(error);
    },
    {
      enableHighAccuracy: true,
      distanceFilter: 1,
      interval: 5000,
      fastestInterval: 2000,
    }
  );


  return watchId;
};

export const stopWatchingLocation = (watchId) => {
  if (watchId !== null) {
    Geolocation.clearWatch(watchId);
  }
};


 export const openMaps = (currentLocation) => {

        const {latitude, longitude} = currentLocation
        const scheme = Platform.select({
          ios: 'maps:',
          android:'geo:'
        })

        const url = Platform.select({
          ios: `http://maps.apple.com/?ll=${latitude},${longitude}`,
          android: `geo:${latitude},${longitude}?q=${latitude},${longitude}`
        })
        Linking.openURL(url);
    };


