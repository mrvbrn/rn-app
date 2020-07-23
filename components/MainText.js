import React from "react";
import { Text, StyleSheet } from "react-native";



const MainText = props => {
    return(
        <Text style={{...styles.text, ...props.style}}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text:{
        fontFamily:'rubik_medium'
    }
})

export default MainText;