import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/colors";





const Header = props => {
    return(
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop:36,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Color.primary,
    },
    headerTitle:{
        fontSize:18,
        color:'black',
        fontFamily:'rubik_medium',
    }
})

export default Header;