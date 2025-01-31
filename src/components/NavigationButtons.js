import React from 'react'
import {View, StyleSheet, Button} from 'react-native'

const NavigationButtons = ({navigation, nextScreen = false}) =>{

    return(
      
            <View style={styles.container}>
                {nextScreen && (
                    <View style={styles.container}>
                    <Button title = {`To ${nextScreen}`} onPress={() => navigation.navigate(nextScreen)}></Button>
                    </View>
                )}
                <Button title = "Go Back" onPress={() => navigation.goBack()}></Button>
            </View> 
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
})

export default NavigationButtons