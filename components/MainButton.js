import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Color from "../constants/colors";



const MainButton = props => {
    return(
        <TouchableOpacity  activeOpacity={0.8} onPress={props.onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              {props.children}
            </Text>
          </View>
        </TouchableOpacity>
    )
}

styles = StyleSheet.create({
    button:{
        backgroundColor:Color.primary,
        paddingHorizontal:30,
        paddingVertical:12,
        borderRadius:25,
    },
    buttonText:{
        color:'white',
        fontFamily:'rubik_regular',
        fontSize:18
    }

})

export default MainButton;