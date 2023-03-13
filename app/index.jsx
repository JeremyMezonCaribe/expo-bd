import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <TextInput
          style={styles.taskInput}
          placeholder="Write your task for today..."
        />
        <TouchableHighlight>
          <Text>SAVE</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.taskListContainer}>
        <Text style={styles.noTaskText}>{`No task to do yet :)`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 30,
  },
  taskContainer: {
    width: "100%",
    marginTop: 50,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskInput: {
    width: "70%",
    marginRight: 15,
    fontSize: 14,
    borderBottomWidth: 1,
    padding: 5,
    borderBottomColor: "#C3C3C3",
  },
  taskListContainer: {
    height: "80%",
    justifyContent: "center",
  },
  noTaskText: {
    fontSize: 26,
    color: "#B3B3B3",
  },
});
