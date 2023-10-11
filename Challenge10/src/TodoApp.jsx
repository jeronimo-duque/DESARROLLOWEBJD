import React from "react";
import TodoAdd from "./TodoAdd.jsx";
import TodoList from "./TodoList.jsx";
import UseTodo from "./UseTodo.jsx";

const initialState = [
  {
    id: new Date().getTime(),
    description: "hacer el proyecto",
    done: false,
  },
];

const TodoApp = () => {
  const { todos, addTodo, deleteTodo } = UseTodo(initialState); // Usa el custom hook

  return (
    <>
      <h1>
        TodoApp: {todos.length},{" "}
        <small>pendientes: {todos.filter((todo) => !todo.done).length}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={deleteTodo} /> {/* Pasa deleteTodo a TodoList */}
        </div>
        <div className="col-5">
          <TodoAdd onNewTodo={addTodo} /> {/* Pasa addTodo a TodoAdd */}
        </div>
      </div>
    </>
  );
};

export default TodoApp;
