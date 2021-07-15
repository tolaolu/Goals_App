import React, { useState } from "react";
import { Button, StyleSheet, View, TextInput } from "react-native";

// u can also create your function with :
// const GoalInput = props => {
//return (the view)
//} const func = props => {} & function func (){} are the same thing.

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.secondView}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />

      <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)}></Button>
      {/** u can also use props.onAddGoal().bind(this(this here
       * means this attribute or function, bind it to 2nd para), enteredGoal) */}
    </View>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  secondView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

// using props.onAddGoal means u have automatically assigned onAddGoal
//as an attribute of this function component.
