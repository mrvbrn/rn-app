import React, { useState }from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App (){
  const [text, setText] = useState("");

  const addGoal = () => {
    console.log(text)
  }
    return (
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Course Goal" 
                   style={styles.input}
                   onChangeText={(text) => setText(text)}
                   value={text}
          />
          <Button title="ADD"
                  onPress={addGoal}
          />
        </View>   
      </View>
    );
 }

const styles = StyleSheet.create({
  screen:{
    padding:30
  },
  inputContainer:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center'
  },
  input:{
    borderColor:'black', 
    borderWidth:1, 
    padding:10, 
    width:'80%'
  }
})

