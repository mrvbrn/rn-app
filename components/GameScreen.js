import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert, FlatList } from "react-native";
import Card from "./Card";
import NumberContainer from "./NumberContainer";
import MainButton from "./MainButton";
import { Ionicons } from "@expo/vector-icons";
import BodyText from "./BodyText";


const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max= Math.floor(max)
    const randomNumber = Math.floor(Math.random()* (max-min))+min;
    if(randomNumber === exclude){
        return generateRandomBetween(min, max, exclude)
    }else{
        return randomNumber
    }
}

const renderListItem = (listLength, dataItem) => (
    <View style={styles.listItem}>
       <BodyText>#{listLength - dataItem.index}</BodyText>
       <BodyText>{dataItem.item}</BodyText>
    </View>
    );
    


const GameScreen = props => {
    const initialGuess = generateRandomBetween(1,100,props.userChoice)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()])
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const nextGuessHandler = direction => {
        if((direction === 'lower' && currentGuess<props.userChoice) || (direction === 'greater' && currentGuess>props.userChoice)){
            Alert.alert("Don\'t lie.", "You know this is wrong...",[{text:'Sorry!', style:'cancel'}])
            return;
        }

        if(direction === 'lower'){
            currentHigh.current = currentGuess
        }else{
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setPastGuesses(curPastGuess => [nextNumber.toString(), ...curPastGuess])
    }

    const { userChoice, onGameOver } = props

    useEffect(() => {
        if(currentGuess === userChoice){
            onGameOver(pastGuesses.length)
        }
    }, [currentGuess, userChoice, onGameOver]);

    return(
        <View style={styles.screen}>
          <Text>Opponent's Guess</Text>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Card style={styles.buttonContainer}>
            <MainButton onPress={nextGuessHandler.bind(this,'lower')}>LOWER</MainButton>
            <MainButton onPress={nextGuessHandler.bind(this,'greater')}>GREATER</MainButton>
          </Card>
          <View style={styles.listContainer}>
            <FlatList
              keyExtractor={(item) => item}
              data={pastGuesses}
              renderItem={renderListItem.bind(this, pastGuesses.length)}
              contentContainerStyle={styles.list}
            />
           
          </View>
          
        </View>
        
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:400,
        maxWidth:'90%'
    },
    listContainer:{
        width:'60%',
        flex:1
    },
    list:{
        justifyContent:'flex-end',
        flexGrow:1

    },
    listItem:{
        borderColor:'#ccc',
        borderWidth:1,
        padding:15,
        marginVertical:10,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',


    }

})

export default GameScreen;