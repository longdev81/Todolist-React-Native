import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../Task/style";
const Task = (props) => {
  const { number } = props;
  const numberText = number < 10 ? `0${number}` : number;
  const itemBg = number % 2 == 0 ? styles.even : styles.odd;
  return (
    <View style={styles.item}>
      <View style={[styles.square, itemBg]}>
        <Text style={styles.number}>{numberText}</Text>
      </View>
      <Text style={styles.content}>{props.title}</Text>
      <TouchableOpacity onPress={props.onDeleteTask}>
        <View>
          <Text style={styles.icon}>Xóa</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
