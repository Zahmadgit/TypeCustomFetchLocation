import React, {useState, useRef} from "react";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

const ChildComponent = ({ onChangeName, name }) => {
    console.log("Rendering ChildComponent");
  
    return (
      <View>
        <TextInput
          placeholder="Enter your name in Child"
          value={name}
          onChangeText={onChangeName} // Calls the function passed from the parent
        />
      </View>
    );
};
//Parent
const UserForm = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const renderCountRef = useRef(0); // bruh this is necessary i promise you
    

    const slowCalculation = (n) => {
        let result = 1;
        for (let i = 1; i <= n; i++) {
          result *= i; // Fatorial calculation, which is time-consuming for large numbers
        }
        return result;
    };

    const increaseAge = age ? slowCalculation(Number(age)) : "N/A"
    console.log("Calculating age")

    const handleChange = (newName) => {
        setName(newName);
      };

    console.log("Rendering UserForm")

    renderCountRef.current +=1 
    return (
        <View>
            <ChildComponent onChangeName={handleChange} name={name} />
            <TextInput
                placeholder = "Enter name"
                value = {name}
                onChangeText={setName}
            ></TextInput>
            <TextInput
                placeholder = "Enter Age"
                value = {age}
                onChangeText={setAge}
                keyboardType="numeric"
            ></TextInput>

            <Text>Age totaled: {increaseAge}</Text>
           <Text>Render count: {renderCountRef.current}</Text>
        </View>
    )
}

export default UserForm