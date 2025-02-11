import React, {useState, useMemo, useCallback, useRef} from "react";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

const ChildComponent = React.memo(({ onChangeAge, age }) => {
    console.log("Rendering ChildComponent");
  
    return (
      <View>
        <TextInput
          placeholder="Enter your name in Child"
          value={age}
          onChangeText={onChangeAge} // Calls the memoized function passed from the parent
        />
      </View>
    );
});


const UserFormOptimized = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    //trying to count rerenders with a useStart led me to infinite rerender errors
    const renderCountRef = useRef(0); // bruh this is necessary i promise you
    //try not to go infinite...
    const slowCalculation = (n) => {
        let result = 1;
        for (let i = 1; i <= n; i++) {
          result *= i; // Fatorial calculation, which is time-consuming for large numbers
        }
        return result;
      };

    const increaseAge = useMemo(() => {
        console.log("Calculating age")
        if(!age) return "N/A"
        return slowCalculation(Number(age))
    }, [age])
       
    // Memoized function for name change
    const handleChange = useCallback((newAge) => {
        setAge(newAge);
        console.log("rebuilt")
    }, [age]); // The function only changes when needed
    console.log("Rendering UserForm")
    
    renderCountRef.current +=1 


    return (
        <View>
            <ChildComponent onChangeName={handleChange} age={age} />
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

export default UserFormOptimized