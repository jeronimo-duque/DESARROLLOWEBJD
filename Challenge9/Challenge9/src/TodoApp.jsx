import React, { useReducer } from "react";
import TodoAdd from "./TodoAdd.jsx";
import TodoList from "./TodoList.jsx";
import TodoReducer from "./TodoReducer.jsx";

const initialState = [
  {
    id: new Date().getTime(),
    description: "hacer el proyecto",
    done: false,
  },
];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] ADD TODO",
      payload: todo,
    };
    dispatch(action);
  };

  // Agrega la función para eliminar una tarea por su ID
  const handleDeleteTodo = (todoId) => {
    const action = {
      type: "[TODO] DELETE TODO",
      payload: todoId,
    };
    dispatch(action);
  };

  return (
    <>
      <h1>
        TodoApp: {todos.length}, <small>pendientes: {todos.filter((todo) => !todo.done).length}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* Pasa handleDeleteTodo a TodoList */}
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>
        <div className="col-5">
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
