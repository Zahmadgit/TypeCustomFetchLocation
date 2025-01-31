import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Increment } from "../actions/Actions";


const Bruh = ({ navigation }) => {

  //accessing global state with useSelector
  const count = useSelector((state) => state.count)
  
  //getting dispatch function to trigger the actions
  const dispatch  = useDispatch()
  


  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Bruh Screen</Text>
      <Text style = {styles.text}>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(Increment())} />
      <Button title="To Comp1" onPress={() => navigation.navigate("Comp1")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '50%',
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgreen",
    borderWidth: 2,
    borderRadius: 50
  },
  text: {
    fontSize: 20,
  },
});

export default Bruh;
