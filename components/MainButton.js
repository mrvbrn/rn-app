import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native";
import Color from "../constants/colors";



const MainButton = props => {

    let ButtonComponent = TouchableOpacity
    if(Platform.OS === 'android' && Platform.Version>=21){
        ButtonComponent = TouchableNativeFeedback
    }
    return(
     <View style={styles.buttonContainer}>
        <ButtonComponent  activeOpacity={0.8} onPress={props.onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              {props.children}
            </Text>
          </View>
        </ButtonComponent>
      </View>
    )
}

styles = StyleSheet.create({
    button:{
        backgroundColor:Color.primary,
        paddingHorizontal:30,
        paddingVertical:12,
        borderRadius:25,
    },
    buttonContainer:{
        borderRadius:25,
        overflow:'hidden'
    },
    buttonText:{
        color:'white',
        fontFamily:'rubik_regular',
        fontSize:18
    }

})

export default MainButton;