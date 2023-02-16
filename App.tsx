import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [courseGoals, setCourseGoals] = useState<
    { text: string; id: string }[]
  >([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const onAddGoal = (goal: string) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goal, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals((currentGoals: { text: string; id: string }[]) =>
      currentGoals.filter((goalItem) => goalItem.id !== id)
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Add New Goal"
            color="#5e0acc"
            onPress={startAddGoalHandler}
          />
        </View>

        <GoalInput
          onAddGoal={onAddGoal}
          showModal={modalIsVisible}
          closeModal={endAddGoalHandler}
        />
        <View style={styles.goalsTitleContainer}>
          <Text style={styles.goalsTitle}>Goals List</Text>
        </View>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                goalText={itemData.item.text}
                id={itemData.item.id}
                deleteGoalHandler={deleteGoalHandler}
              />
            )}
            alwaysBounceVertical={true}
            keyExtractor={(item, index) => item.id.toString()}
          />
        </View>
      </View>
    </>
  );
}

// Styles do not cascade here!
// Helps to clearly seperate styles with TSX code.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#cccccc",
    marginBottom: 25,
  },
  goalsTitleContainer: {
    alignItems: "center",
  },
  goalsTitle: {
    color: "white",
    fontSize: 20,
    paddingBottom: 8,
  },
  goalsContainer: {
    flex: 5,
    paddingTop: 8,
    borderTopWidth: 1,
    borderColor: "#cccccc",
  },
});
