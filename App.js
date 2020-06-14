import React, { useState }from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from "./component/GoalItem.js";
import GoalInput from "./component/GoalInput.js";

export default function App (){
  const [courseGoals, setCourseGoals] = useState([]);

   const addGoalsHandler = (goalTitle) => {
      setCourseGoals(currentGoals => [...currentGoals, { id:Math.random().toString(), value:goalTitle }
        ]);
    };
    return (
      <View style={styles.screen}>
        <GoalInput
          addGoalsHandler={addGoalsHandler}
        />
        <FlatList
          keyExtractor={(item,index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem title={itemData.item.value}/>  
            )}
        /> 
      </View>
    );
 }

const styles = StyleSheet.create({
  screen:{
    padding:30
  },
})

