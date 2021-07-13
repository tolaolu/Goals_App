import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  {
    /** below we used spread operator to get all elements in courseGoal array
    and we put them all into a new array of currentGoal, the 2nd param means
  we now even added a new element enteredGoal to this new array. */
  }

  {
    /** two things in line 34 setCourseGoal((currentGoal) => .....:
      1) is the spread operator, which is taking all the elements in
      our old aray coursegoal and adding them to a new array currentgoal
      2) and adding 2nd params to this means we are adding another element to 
      join the elements inside the new array.
      3)key is embedded into the 2nd params n converted to string cos of 
      React's rule to add a key to list of items we want to be rendering. */
  }
  const addGoalHandler = () => {
    setCourseGoal((currentGoal) => [
      ...courseGoal,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
  };

  return (
    <View style={styles.firstView}>
      <View style={styles.secondView}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        {/** onChangeText automatically takes the text that is changed and
         * it passes that text into the parameter/args of the
         *  handler set for it(goalInputHandler) note that goalINputhandler
         * has a parameter enteredText, so onChangeText will put the
         * changed text into enteredText of goalInputHandler.**/}
        {/** the value={enteredGoal is the userinput text} **/}
        <Button title="ADD" onPress={addGoalHandler}></Button>
      </View>
      {/** flatlist below is d view to show all goals list. */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemData) => (
          <View style={styles.listItems}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  firstView: {
    padding: 50,
  },
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
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#CCC",
    borderColor: "black",
    borderWidth: 1,
  },
});
