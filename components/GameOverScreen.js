import React from "react";
import { View, Text, StyleSheet, Image, Dimensions} from "react-native";
import BodyText from "./BodyText";
import Colors from "../constants/colors.js";
import MainButton from "./MainButton";
import MainText from "./MainText";



const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
          <MainText>The Game is Over!</MainText>
            <View style={styles.imageContainer}>
             <Image source={require('../assets/success.png')}
                 resizeMode="contain"
                 style={styles.image}
             />
            </View>
          <View style={styles.resultContainer}>
            <BodyText style={styles.textResult}>Your phone needed  
              <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds to guess the number  
              <Text style={styles.highlight}> {props.userNumber}</Text>
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
        width:300,
        height:300,
        marginVertical: Dimensions.get('window').width/60


    },
    highlight:{
        color:Colors.primary,
        fontFamily: 'rubik_medium',
    },
    textResult:{
        textAlign:'center',
        fontSize:20
    },
    imageContainer:{
      marginVertical: Dimensions.get('window').width/30,
      width:Dimensions.get('window').width*0.7,
      height:Dimensions.get('window').width*0.7,

    },
    resultContainer:{
        marginHorizontal:10,
        marginVertical:Dimensions.get('window').height/60,
    }
})

export default GameOverScreen;