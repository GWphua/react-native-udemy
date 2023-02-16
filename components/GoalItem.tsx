import { ListRenderItemInfo, StyleSheet, Text, View } from "react-native";
import { FC } from "react";

interface IGoalItem {
  itemData: ListRenderItemInfo<string>;
}

const GoalItem: FC<IGoalItem> = ({ itemData }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item}</Text>
    </View>
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
