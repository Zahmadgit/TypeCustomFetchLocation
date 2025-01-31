import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ImageBackground} from "react-native";
import { connect } from "react-redux";
import { Increment, SetMessage, SetBackgroundImage } from "../actions/Actions";
import NavigationButtons from "../components/NavigationButtons";

class Comp3 extends Component {
  pickRandomMessage = () =>{
    const {messages, SetMessage} = this.props
    const index = Math.floor(Math.random() * messages.length)
    SetMessage(messages[index])
  }
  pickRandomImage = () =>{
    const {imageBackgrounds, SetBackgroundImage} = this.props
    const keys = Object.keys(imageBackgrounds)
    const index = Math.floor(Math.random() * keys.length)
    SetBackgroundImage(keys[index])
  }
  render() {
    const { navigation, count, Increment, currentMessage, currentBackground } = this.props;
   
    return (
    <ImageBackground 
        source={this.props.imageBackgrounds[this.props.currentBackground]} 
        style={styles.backgroundImage}
        resizeMode="cover">
      
      <View style={styles.container}>
        <Text>Comp3 Screen</Text>
        <Text style={styles.text}>Count: {count}</Text>
        <Button title="Increment" onPress={Increment} />
        <Text style={styles.text}>{currentMessage}</Text>
        <Button title = "Change Todays Fortune" onPress={this.pickRandomMessage}></Button>        
        <Button title = "Change Background Image" onPress={this.pickRandomImage}></Button>        

        <NavigationButtons navigation = {navigation} nextScreen="Bruh"></NavigationButtons>
      </View>
      </ImageBackground>
    );
  }
}

//maping the redux state to component props
const mapStateToProps = (state) => ({
  count: state.count,
  messages: state.messages,
  currentMessage: state.currentMessage,
  imageBackgrounds: state.imageBackgrounds,
  currentBackground: state.currentBackground

})

//maping dispatch function to component props
const mapDispatchToProps = {
  Increment,
  SetMessage,
  SetBackgroundImage
}


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  },
  container: {
    marginTop: '50%',
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderWidth: 2,
    borderRadius: 50
  },
  text: {
    fontSize: 20,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Comp3);
