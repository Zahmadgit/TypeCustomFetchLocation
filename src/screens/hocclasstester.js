import React, { Component } from "react";
import { View, Text } from "react-native";
import withScreenAlert from "../hoc/withScreenAlert";


class hocclasstester extends Component {

  render() {   
    return (
    <View>
        <Text>class component</Text>
    </View>)}}

export default withScreenAlert(hocclasstester, "hoc wrapper around a class component")