import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ImageBackgroundWrapper from "../components/ImageBackgroundWrapper";
import NavigationButtons from "../components/NavigationButtons";
import withScreenAlert from "../hoc/withScreenAlert";
import ClearStateButton from "../components/ClearStateButton";

const Comp1 = ({ navigation }) => {
  const fortune = useSelector((state) => state.general.currentMessage);




  return (
    <ImageBackgroundWrapper useBackground={true}>
        <Text style = {styles.text}>Comp1 Screen</Text>
        <Text style = {styles.text}>{fortune}</Text>
        <ClearStateButton></ClearStateButton>
        <NavigationButtons navigation = {navigation} nextScreen="Comp2"></NavigationButtons>
    </ImageBackgroundWrapper>

  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default withScreenAlert(Comp1, "This component is wrapped with a HOC");