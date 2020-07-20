import React from "react";
import { View, Text, StyleSheet, Button, Image} from "react-native";
import BodyText from "./BodyText";
import MainButton from "./MainButton";
import Colors from "../constants/colors";



const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
          <BodyText>The Game is Over!</BodyText>
          <Image source={require('../assets/success.png')}
                 resizeMode="contain"
                 style={styles.image}
          />
          <View style={styles.textContainer}>
             <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber} </Text> 
               rounds to guess the  number 
             <Text style={styles.highlight}> {props.userNumber}.</Text>
             </BodyText>
          </View>
          <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    )

}

const styles = StyleSheet.create({
    screen : {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:"80%",
        height:300,
        
    },
    highlight:{
      color : Colors.primary,
      fontFamily:'rubik_medium',

    },
    textContainer:{
      marginHorizontal:30,
      marginVertical:12
    },
    resultText:{
      textAlign:'center',
      fontSize:18
    }
})

export default GameOverScreen;