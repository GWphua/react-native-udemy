import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<
    { text: string; id: string }[]
  >([]);

  const onAddGoal = (goal: string) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goal, id: Math.random.toString() },
    ]);
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals((currentGoals: { text: string; id: string }[]) =>
      currentGoals.filter((goalItem) => goalItem.id !== id)
    );
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={onAddGoal} />
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

  goalsContainer: {
    flex: 5,
  },
});
