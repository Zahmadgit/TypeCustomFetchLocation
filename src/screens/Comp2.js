import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ImageBackgroundWrapper from "../components/ImageBackgroundWrapper";
import NavigationButtons from "../components/NavigationButtons";

const Comp2 = ({ navigation }) => {

  const count = useSelector((state) => state.count)
  const backgroundImage = useSelector((state) => state.currentBackground)
  const imageBackgrounds = useSelector((state) => state.imageBackgrounds)
  return (
    <ImageBackgroundWrapper useBackground={true}>
      <Text style = {styles.text}>Comp2 Screen</Text>
      <Text style = {styles.text}>{count}</Text>
      <NavigationButtons navigation = {navigation} nextScreen="Comp3"></NavigationButtons>
    </ImageBackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default Comp2;