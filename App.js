import React, { useState }from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from "./component/GoalItem.js";
import GoalInput from "./component/GoalInput.js";

export default function App (){
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { id:Math.random().toString(), value:goalTitle }
      ]);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != goalId);
    });
  };
  return (
    <View style={styles.screen}>
      <GoalInput
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item,index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem onDelete={() => removeGoalHandler(itemData.item.id)} title={itemData.item.value}/>  
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

