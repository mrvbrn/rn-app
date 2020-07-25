import React, { useState } from 'react';
import {View, StyleSheet, SafeAreaView } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./components/StartGameScreen";
import GameScreen from "./components/GameScreen";
import GameOverScreen from "./components/GameOverScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
    return Font.loadAsync({
        'rubik_medium': require('./assets/fonts/rubik_medium.ttf'),
        'rubik_regular':require('./assets/fonts/rubik_regular.ttf'),
                     
    });
};



export default function App (){
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    if(!dataLoaded){
        return <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                onError={(err) => console.log(err)}

               />;
    }

    const configureNewGameHandler = () => {
        setGuessRounds(0);
        setUserNumber(null);
    }

    const startGameHandler = selectedNumber => {
        setUserNumber(selectedNumber);
        
    };

    const gameOverHandler = numOfRounds =>{
        setGuessRounds(numOfRounds);
    }

    let content = <StartGameScreen onStartGame={startGameHandler}/>;
    if(userNumber && guessRounds<=0){
        content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
    }else if (guessRounds>0){
        content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>;
    }


  return (
    <SafeAreaView style={styles.screen}>
      <Header title='Guess a Number'/>
      {content}
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
    screen:{
        flex:1
    }
})


