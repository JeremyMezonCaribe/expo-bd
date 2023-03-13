import { FlatList } from "react-native";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const data = [
    {
      id: 1,
      task: "Do my homework",
    },
    {
      id: 2,
      task: "Meeting up John",
    },
    {
      id: 3,
      task: "Take dinner with her",
    },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return <TodoItem textItem={item.task} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TodoList;
