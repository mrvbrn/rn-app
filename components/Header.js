import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import MainText from "./MainText";
import Colors from "../constants/colors";





const Header = props => {
    return(
        <View style={{...styles.headerBase, ...Platform.select({
            ios: styles.headerIos,
            android: styles.headerAndroid
        })}}>
          <MainText style={styles.headerTitle}>{props.title}</MainText>
        </View>
    )
}


const styles = StyleSheet.create({
    headerBase:{
        width:'100%',
        height:90,
        paddingTop:36,
        alignItems:'center',
        justifyContent:'center',
       

    },
    headerIos:{
        backgroundColor: 'white',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,

    },
    headerAndroid:{
        backgroundColor: Colors.primary,
        borderBottomColor:'transparent',
        borderBottomWidth:0,

    },
    headerTitle:{
        color: Platform.OS === 'ios' ? Colors.primary : 'white'
    }
})

export default Header;