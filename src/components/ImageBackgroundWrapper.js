import React from 'react'
import {View, StyleSheet, ImageBackground} from 'react-native'
import { useSelector } from 'react-redux'

const ImageBackgroundWrapper = ({children, useBackground = false, viewColor}) =>{
    const currentBackground = useSelector((state) => state.generalReducer.currentBackground)
    const imageBackgrounds = useSelector((state)=> state.generalReducer.imageBackgrounds)

    return useBackground? (
        <ImageBackground 
            source={imageBackgrounds[currentBackground]} 
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.container}>{children}</View>
        </ImageBackground>
        ):(
            <View style={styles.container}></View>
        )


        
}

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
    }
})

export default ImageBackgroundWrapper