import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Increment } from "../actions/Actions";
import ImageBackgroundWrapper from "../components/ImageBackgroundWrapper";
import NavigationButtons from "../components/NavigationButtons";
import { increment} from "../store/dataSlice";
import UserFormOptimized from "../components/UserFormOptimized";



const Bruh = ({ navigation }) => {

  //accessing global state with useSelector
  const count = useSelector((state) => state.general.count)
  
  //getting dispatch function to trigger the actions
  const dispatch  = useDispatch()



  return (
  <ImageBackgroundWrapper useBackground={true}>
      <Text style = {styles.text}>Bruh Screen</Text>
      <Text style = {styles.text}>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <NavigationButtons navigation = {navigation} nextScreen="Comp1"></NavigationButtons>
      <UserFormOptimized/>
      </ImageBackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default Bruh;
