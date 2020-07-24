import React, { useState, useEffect } from "react";
import { View,
         StyleSheet, 
         Text, 
         Button, 
         TouchableWithoutFeedback, 
         Keyboard, 
         Alert, 
         Dimensions, 
         ScrollView,
         KeyboardAvoidingView
       } from "react-native";
import Card from "./Card";
import Input from "./Input"
import Color from "../constants/colors";
import NumberContainer from "./NumberContainer";
import BodyText from "./BodyText";
import MainButton from "./MainButton";


const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [confirmedValue, setConfirmedValue] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')
  const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width/5)


  useEffect(() => {
    const updateLayout = () =>{
      setButtonWidth(Dimensions.get('window').width/4);
    }
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmedValue(false)
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert('Invalid number', 'Choose number between 1 to 99' ,[{text:'Okay', style:"destructive", onPress:resetInputHandler}])
      return;
    }
    setEnteredValue('')
    setConfirmedValue(true)
    setSelectedNumber(parseInt(enteredValue))
    Keyboard.dismiss();
  }

  let confirmedOutput;
  if(confirmedValue){
    confirmedOutput = 
      <Card style={styles.summaryContainer}>
        <BodyText> You Selected</BodyText>
        <NumberContainer>
            {selectedNumber}
        </NumberContainer>
        <MainButton onPress={()=>props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
  }

  if(Dimensions.get('window').width <500 ){
    return(
      <ScrollView>
        <KeyboardAvoidingView behaviour="position" keyboardVerticalOffset={30}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <Text style={styles.title}>Start  a New Game</Text>
              <BodyText>Select a Number</BodyText>
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
                <View style={{buttonWidth}}><Button title="Reset" onPress={resetInputHandler} color={Color.accent}/></View>
                <View style={{buttonWidth}}><Button title="Confirm" onPress={confirmInputHandler} color={Color.primary}/></View>
              </View>
            {confirmedOutput}
          </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
      
    )    

  }


    return(
      <ScrollView>
        <KeyboardAvoidingView behaviour="position" keyboardVerticalOffset={30}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <Text style={styles.title}>Start  a New Game</Text>
              <Card style={styles.inputContainer}>
              <BodyText>Select a Number</BodyText>
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
                <View style={{buttonWidth}}><Button title="Reset" onPress={resetInputHandler} color={Color.accent}/></View>
                <View style={{buttonWidth}}><Button title="Confirm" onPress={confirmInputHandler} color={Color.primary}/></View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
      
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
        marginVertical:10,
        fontFamily:'rubik_medium',
    },
    inputContainer:{
        width:'80%',
        maxWidth:'95%',
        minWidth:300,
        alignItems:'center',
    },
    button:{
        width:Dimensions.get('window').width/4
    },
    input:{
        width:50,
        textAlign:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
        paddingHorizontal:15

    },
    summaryContainer:{
      marginTop:20,
      alignItems:'center',

    },
})


export default StartGameScreen;