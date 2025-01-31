import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";


const Comp2 = ({ navigation }) => {

  const count = useSelector((state) => state.count)
  const backgroundImage = useSelector((state) => state.currentBackground)
  const imageBackgrounds = useSelector((state) => state.imageBackgrounds)

  const dispatch  = useDispatch()
  return (
    <ImageBackground 
            source={imageBackgrounds[backgroundImage]} 
            style={styles.backgroundImage}
            resizeMode="cover">
    <View style={styles.container}>
      <Text style = {styles.text}>Comp2 Screen</Text>
      <Text style = {styles.text}>{count}</Text>
      <Button title="To Comp3" onPress={() => navigation.navigate("Comp3")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '50%',
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderWidth: 2,
    borderRadius: 50
  },
  text: {
    fontSize: 20,
  },
  backgroundImage: {
    flex: 1
  },
});

export default Comp2;