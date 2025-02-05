import React, {useCallback} from 'react'
import { Alert } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

const withScreenAlert = (WrappedComponent, message = "hello there") => {
    return (props)=>{
        useFocusEffect(
            useCallback(()=>{
                Alert.alert("alert",message)
            },[])
        )
        return <WrappedComponent{...props}/>
    }
}

export default withScreenAlert