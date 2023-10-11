import React from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  const handleDeleteTodo = (todoId) => {
    onDeleteTodo(todoId);
  };

  return (
    <ul className="list-group">
      {todos.map((todo, key) => (
        <div key={key}>
          <TodoItem todo={todo} onToggleTodo={onToggleTodo} />
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            Borrar
          </button>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
