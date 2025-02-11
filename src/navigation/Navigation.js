import React, {useEffect, useState} from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GeoLocater from '../screens/GeoLocater';
import Bruh from '../screens/Bruh';
import Comp1 from '../screens/Comp1';
import Comp2 from '../screens/Comp2';
import Comp3 from '../screens/Comp3';
import Maps from '../screens/Maps';
import hocclasstester from '../screens/hocclasstester';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth'
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator initialRouteName = "Login">
            <Stack.Screen name = "Login" component={Login}/>
            <Stack.Screen name = "Signup" component={Signup}/>
        </Stack.Navigator>
    )
    
}


const  AppStack = () =>  {
    return(
        <Stack.Navigator initialRouteName="GeoLocater">
            <Stack.Screen name="GeoLocater" component={GeoLocater} />
            <Stack.Screen name="Bruh" component={Bruh} />
            <Stack.Screen name="Comp1" component={Comp1} />
            <Stack.Screen name="Comp2" component={Comp2} />
            <Stack.Screen name="Comp3" component={Comp3} />
            <Stack.Screen name="hocclasstester" component={hocclasstester} />
            <Stack.Screen name="Maps" component={Maps} />
        </Stack.Navigator>
    )
    
  }


  const  Navigation = () =>  {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = auth().onAuthStateChanged((authUser) => {
        setUser(authUser);
      });
  
      return unsubscribe;
    }, []);
  
    return user ? <AppStack /> : <AuthStack />;
}

export default Navigation;
