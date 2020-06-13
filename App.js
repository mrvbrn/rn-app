import React, { useState }from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App (){
  const [enteredGoals, setEnteredGoals] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalsHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoals]);
  };
    return (
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Course Goal" 
                   style={styles.input}
                   onChangeText={(enteredGoals) => setEnteredGoals(enteredGoals)}
                   value={enteredGoals}
          />
          <Button title="ADD"
                  onPress={addGoalsHandler}
          />
        </View>
        <ScrollView> 
          {courseGoals.map((goal) => 
            <View style={styles.listItems}>
              <Text>{goal}</Text>
            </View>
          )}
        </ScrollView> 
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
  },
  listItems:{
    padding:10,
    marginVertical: 10,
    borderColor:'black',
    backgroundColor:'#ccc',
    borderWidth:1
  }
})

