import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";


const GoalInput = props => {
    const [enteredGoals, setEnteredGoals] = useState('');


    const goalInputHandler = enteredText => {
      setEnteredGoals(enteredText)
    }

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoals)
      setEnteredGoals('')
    }


    return(
      <Modal visible={props.visible}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Course Goal" 
                   style={styles.input}
                   onChangeText={goalInputHandler}
                   value={enteredGoals}
          />
          <Button title="Cancel" color="red" onPress={props.onCancel}/>
          <Button title="Add"
                  onPress={addGoalHandler}
          />
        </View>
      </Modal>
    )
}


const styles = StyleSheet.create({
  inputContainer:{
    flex:1,
    justifyContent:'center', 
    alignItems:'center'
  },
  input:{
    borderColor:'black', 
    borderWidth:1, 
    padding:10, 
    width:'80%',
    marginBottom:10
  },

})


export default GoalInput;