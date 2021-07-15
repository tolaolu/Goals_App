import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onGoalDelete.bind(this, props.id)}>
      <View style={styles.listItems}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
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
