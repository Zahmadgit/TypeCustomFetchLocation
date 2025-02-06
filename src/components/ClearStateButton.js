import React from "react";
import { Button, View } from "react-native";
import { clearStatePersist } from "../helper/clearStatePersist";

const ClearStateButton = () =>{
    return(
    <View style = {{margin: 10}}>
        <Button title="Clear Persisted State" onPress={clearStatePersist}></Button>
    </View>
    )
}

export default ClearStateButton