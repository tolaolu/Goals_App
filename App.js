import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoal((currentGoal) => [
      ...courseGoal,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  return (
    <View style={styles.firstView}>
  
      {/** the value={enteredGoal is the userinput text} **/}
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemData) => (
          <GoalItem title={itemData.item.value}></GoalItem>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  firstView: {
    padding: 50,
  },
});


  {/** onChangeText automatically takes the text that is changed and
       * it passes that text into the parameter/args of the
       *  handler set for it(goalInputHandler) note that goalINputhandler
       * has a parameter enteredText, so onChangeText will put the
       * changed text into enteredText of goalInputHandler.**/}

       {
        /** two thingsto note: setCourseGoal((currentGoal) => ...in line 13
          1) is the spread operator, which is taking all the elements in
          our old aray coursegoal and adding them to a new array currentgoal
          2) and adding 2nd params to this means we are adding another element to 
          join the elements inside the new array.
          3)key is embedded into the 2nd params n converted to string cos of 
          React's rule to add a key to list of items we want to be rendering. */
      }

      {
        /** spread operator to get all elements in courseGoal array
        and we put them all into a new array of currentGoal, the 2nd param means
      we now even added a new element enteredGoal to this new array. */
      }
      //when u use props as a params of a func, it enables u to be able to 
      // create any attribute for that func and name it as u like.
      // it will now be like when u have a text tag that comes with
      //attribute 'placeholder'. u can have ur components too, and create their
      // attributes attributes for them so u can call them anything with ur comp.
      // so whenever u call ur component, u can call its attributes too and even
      //pass a whole function into that attribute eg:
      //<DisplayorComponent saySomething={onClickHandler}/>