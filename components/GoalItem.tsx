import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface IGoalItem {
  goalText: string;
  id: string;
  deleteGoalHandler: (id: string) => void;
}

const GoalItem: FC<IGoalItem> = ({ goalText, id, deleteGoalHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={deleteGoalHandler.bind(this, id)}
        style={(pressed) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{id}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
