import React, { useState } from 'react';
import {View, StyleSheet } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./components/StartGameScreen";
import GameScreen from "./components/GameScreen";
import GameOverScreen from "./components/GameOverScreen";



export default function App (){
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);

    const startGameHandler = selectedNumber => {
        setUserNumber(selectedNumber);
        setGuessRounds(0);
    };

    const gameOverHandler = numOfRounds =>{
        setGuessRounds(numOfRounds);
    }

    let content = <StartGameScreen onStartGame={startGameHandler}/>;
    if(userNumber && guessRounds<=0){
        content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
    }else if (guessRounds>0){
        content = <GameOverScreen/>;
    }


  return (
    <View style={styles.screen}>
      <Header title='Guess a Number'/>
      {content}
    </View>
  );
}

const styles=StyleSheet.create({
    screen:{
        flex:1
    }
})


