import React from "react";
import { StyleSheet, View, Text } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.listItems}>
      <Text>{props.title}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#CCC",
    borderColor: "black",
    borderWidth: 1,
  },
});

{
  /** GoalItem (props) {
    return....
} */
}
