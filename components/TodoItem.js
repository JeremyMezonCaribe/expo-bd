import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const TodoItem = ({ textItem = "Nothing Here" }) => {
  const { todoItemBox, todoItemText } = styles;

  return (
    <View style={todoItemBox}>
      <Text style={todoItemText}>{textItem}</Text>
      <TouchableHighlight>
        <Text>DELETE</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItemBox: {
    minWidth: 200,
    marginTop: 7,
    marginBottom: 7,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#D9D9C9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todoItemText: {
    fontWeight: 600,
  },
});

export default TodoItem;
