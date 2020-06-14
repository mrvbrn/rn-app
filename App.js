import React, { useState }from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalItem from "./component/GoalItem.js";
import GoalInput from "./component/GoalInput.js";

export default function App (){
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { id:Math.random().toString(), value:goalTitle }
      ]);
    setModalVisible(false)
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != goalId);
    });
  };

  const cancelGoalAddition = () => {
    setModalVisible(false)
  }
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setModalVisible(true)}/>
      <GoalInput
        visible={modalVisible}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAddition}
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

