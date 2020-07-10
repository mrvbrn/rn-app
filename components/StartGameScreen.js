import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard} from "react-native";
import Card from "./Card";
import Input from "./Input"
import Color from "../constants/colors";


const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [confirmedValue, setConfirmedValue] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmedValue(false)
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue)
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99){
      return;
    }
    setEnteredValue('')
    setConfirmedValue(true)
    setSelectedNumber(parseInt(enteredValue))

  }

  let confirmedOutput;
  if(confirmedValue){
    confirmedOutput = <Text>Chosen Number : {selectedNumber}</Text>
  }


    return(
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
          <Text style={styles.title}>Start  a New Game</Text>
            <Card style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <Input style={styles.input} 
                   maxLength={2}
                   keyboardType="number-pad"
                   autoCapitalize="none"
                   autoCorrect={false}
                   blurOnSubmit
                   onChangeText={numberInputHandler}
                   value={enteredValue}
                                        />

            <View style={styles.buttonContainer}>
              <View><Button title="Reset" onPress={resetInputHandler} color={Color.accent}/></View>
              <View><Button title="Confirm" onPress={confirmInputHandler} color={Color.primary}/></View>
            </View>
          </Card>
          {confirmedOutput}
        </View>
      </TouchableWithoutFeedback>
    )    
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        alignItems:'center',
        padding:10
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },
    button:{
        width:100
    },
    input:{
        width:50,
        textAlign:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15

    }
})


export default StartGameScreen;