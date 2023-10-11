import React from "react";

const TodoItem = ({ todo, onToggleTodo }) => {
  const handleToggle = () => {
    onToggleTodo(todo.id);
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        todo.done ? "text-decoration-line-through" : ""
      }`}
    >
      <span className="align-self-center" onClick={handleToggle}>
        {todo.description}
      </span>
      <button onClick={handleToggle}>
        {todo.done ? "Desmarcar" : "Marcar"}
      </button>
    </li>
  );
};

export default TodoItem;
