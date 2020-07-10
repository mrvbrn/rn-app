import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Card from "./Card";
import Input from "./Input"
import Color from "../constants/colors";


const StartGameScreen = (props) => {
    return(
      <View style={styles.screen}>
        <Text style={styles.title}>Start  a New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input style={styles.input} maxLength={2}
                                      keyboardType="numeric"
                                      autoCapitalize="none"
                                      autoCorrect={false}
                                      blurOnSubmit
                                      />

          <View style={styles.buttonContainer}>
            <View><Button title="Reset" onPress={() => {}} color={Color.accent}/></View>
            <View><Button title="Confirm" onPress={() =>{}} color={Color.primary}/></View>
          </View>
        </Card>
      </View>
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