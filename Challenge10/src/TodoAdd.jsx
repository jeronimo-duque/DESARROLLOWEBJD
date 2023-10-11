import React, { useState } from "react";

const TodoAdd = ({ onNewTodo }) => {
  const [newTask, setNewTask] = useState(""); // Agrega estado para capturar el valor del campo de entrada

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTask.trim() === "") {
      return; // Evitar agregar una tarea vacía
    }

    const newTodo = {
      id: new Date().getTime(),
      description: newTask, // Usar el valor capturado del campo de entrada
      done: false,
    };
    onNewTodo(newTodo);
    setNewTask(""); // Limpiar el campo de entrada después de agregar
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="tarea"
        className="form-control"
        value={newTask} // Vincula el valor del campo de entrada al estado
        onChange={(e) => setNewTask(e.target.value)} // Actualiza el estado con el valor del campo
      />
      <button type="submit" className="btn btn-primary mt-1">
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;
