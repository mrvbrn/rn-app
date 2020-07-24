import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView} from "react-native";
import BodyText from "./BodyText";
import Colors from "../constants/colors.js";
import MainButton from "./MainButton";
import MainText from "./MainText";



const GameOverScreen = props => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width)
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height)

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get('window').height);
      setAvailableDeviceWidth(Dimensions.get('window').width);
    };
    Dimensions.addEventListener('change', updateLayout);
    return ()=>{
       Dimensions.removeEventListener('change', updateLayout)   
    }
  })
    return(
      <ScrollView>
        <View style={styles.screen}>
          <MainText>The Game is Over!</MainText>
            <View style={{...styles.imageContainer, ...{
              marginVertical:availableDeviceWidth/180
            }}}>
             <Image source={require('../assets/success.png')}
                 resizeMode="contain"
                 style={{
                  marginVertical: availableDeviceWidth/60,
                  width: availableDeviceHeight<400 ? 170:300,
                  height:availableDeviceHeight<400 ? 170:300

                 }}
             />
            </View>
          <View style={{...styles.resultContainer, ...{
            marginVertical:availableDeviceHeight/60

          }}}>
            <BodyText style={{...styles.textResult, ...{
              fontSize:availableDeviceHeight < 400 ? 16: 20
            }}}>Your phone needed  
              <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds to guess the number  
              <Text style={styles.highlight}> {props.userNumber}</Text>
            </BodyText>
          </View>
          <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
      </ScrollView>
    )

}

const styles = StyleSheet.create({
    screen : {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10
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
      overflow:'hidden'

    },
    resultContainer:{
        marginHorizontal:10,
    }
})

export default GameOverScreen;