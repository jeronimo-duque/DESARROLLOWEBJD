import React from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, onDeleteTodo }) => {
  const handleDeleteTodo = (todoId) => {
    onDeleteTodo(todoId);
  };

  return (
    <ul className="list-group">
      {todos.map((todo, key) => (
        <div key={key}>
          <TodoItem todo={todo} />
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteTodo(todo.id)} // Llama a onDeleteTodo con el ID
          >
            Borrar
          </button>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
