import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ImageBackgroundWrapper from "../components/ImageBackgroundWrapper";
import NavigationButtons from "../components/NavigationButtons";


const Comp1 = ({ navigation }) => {
  const fortune = useSelector((state) => state.currentMessage);




  return (
    <ImageBackgroundWrapper useBackground={true}>
        <Text style = {styles.text}>Comp1 Screen</Text>
        <Text style = {styles.text}>{fortune}</Text>
        <NavigationButtons navigation = {navigation} nextScreen="Comp2"></NavigationButtons>
    </ImageBackgroundWrapper>

  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default Comp1;