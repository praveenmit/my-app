import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
} from "react-native";

const HomeScreen = () => {
  const [enteredGoal, setEnteredGoal] = useState(""); // State for the input
  const [goals, setGoals] = useState([]); // State for the list of goals

  const addGoalHandler = () => {
    if (enteredGoal.trim().length > 0) {
      setGoals((currentGoals) => [
        ...currentGoals,
        { id: Math.random().toString(), value: enteredGoal },
      ]);
      setEnteredGoal(""); // Clear the input
    }
  };

  return (
    <View style={styles.appContainer}>
      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your goal"
          value={enteredGoal}
          onChangeText={setEnteredGoal} // Update input state
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      {/* Goals List Section */}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{item.value}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
    backgroundColor: "#5e0347",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    backgroundColor: "#fff",
  },
  goalsContainer: {
    flex: 1,
    marginTop: 10,
  },
  goalItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  goalText: {
    color: "#333",
  },
});
