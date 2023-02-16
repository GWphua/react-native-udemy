import { FC } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

interface IGoalItem {
  goalText: string;
  id: string;
  deleteGoalHandler: (id: string) => void;
}

const GoalItem: FC<IGoalItem> = ({ goalText, id, deleteGoalHandler }) => {
  return (
    <Pressable onPress={deleteGoalHandler.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{goalText}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
