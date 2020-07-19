import React from "react";
import { View, Text, StyleSheet, Button, Image} from "react-native";
import BodyText from "./BodyText";



const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
          <BodyText>The Game is Over!</BodyText>
          <Image source={require('../assets/success.png')}
                 resizeMode="contain"
                 style={styles.image}
          />
          <BodyText>Number of Rounds : {props.roundsNumber}</BodyText>
          <BodyText>Number was : {props.userNumber}</BodyText>
          <Button title="NEW GAME" onPress={props.onRestart}/>
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
        
    }
})

export default GameOverScreen;