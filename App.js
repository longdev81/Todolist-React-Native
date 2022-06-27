import React, { useState } from "react";
import { Text, View, ScrollView, Alert } from "react-native";

import styles from "./App.components.style";
//components
import Task from "./components/Task";
import Form from "./components/Form";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index, item) => {
    Alert.alert("Thông Báo !", `Bạn có chắc muốn xóa task - ${item}`, [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "OK",
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {taskList.map((item, index) => {
            return (
              <Task
                key={index}
                title={item}
                number={index + 1}
                onDeleteTask={() => handleDeleteTask(index, item)}
              />
            );
          })}
        </ScrollView>
        <Form onAddTask={handleAddTask} />
      </View>
    </View>
  );
}
