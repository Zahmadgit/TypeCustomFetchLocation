import { PermissionsAndroid, Linking, Alert} from "react-native";
import Geolocation from "@react-native-community/geolocation";

export const requestLocationPermission = async () => {
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


 export const openMaps = (currentLocation) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${currentLocation.latitude},${currentLocation.longitude}`;
        Linking.openURL(url);
    };


