import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Comp1 = ({ navigation }) => {
  const fortune = useSelector((state) => state.currentMessage);




  return (
  
      <View style={styles.container}>
        <Text style = {styles.text}>Comp1 Screen</Text>
        <Text style = {styles.text}>{fortune}</Text>
        <Button title="To Comp2" onPress={() => navigation.navigate("Comp2")} />
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
    backgroundColor: "yellow",
    borderWidth: 2,
    borderRadius: 50
  },
  text: {
    fontSize: 20,
  },
});

export default Comp1;