import { useReducer } from "react";
import TodoReducer from "./TodoReducer";

const UseTodo = (initialState) => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const addTodo = (todo) => {
    const action = {
      type: "[TODO] ADD TODO",
      payload: todo,
    };
    dispatch(action);
  };

  const deleteTodo = (todoId) => {
    const action = {
      type: "[TODO] DELETE TODO",
      payload: todoId,
    };
    dispatch(action);
  };

  return { todos, addTodo, deleteTodo };
};

export default UseTodo;
