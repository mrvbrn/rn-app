import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";


const GoalInput = props => {
    const [enteredGoals, setEnteredGoals] = useState("");


    const goalInputHandler = enteredText => {
      setEnteredGoals(enteredText)
    }

    return(
      <View style={styles.inputContainer}>
          <TextInput placeholder="Course Goal" 
                   style={styles.input}
                   onChangeText={goalInputHandler}
                   value={enteredGoals}
          />
          <Button title="ADD"
                  onPress={() => props.addGoalHandler(enteredGoals)}
          />
      </View>
    )
}


const styles = StyleSheet.create({
    inputContainer:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center'
  },
  input:{
    borderColor:'black', 
    borderWidth:1, 
    padding:10, 
    width:'80%'
  },

})


export default GoalInput;