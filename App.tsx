import { useState } from "react";
import {
  FlatList,
  StyleSheet, View
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  const onAddGoal = (goal: string) => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, goal]);
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={onAddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => <GoalItem itemData={itemData} />}
          alwaysBounceVertical={true}
          keyExtractor={(item, index) => index.toString()}
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
