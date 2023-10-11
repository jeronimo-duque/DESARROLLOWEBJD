import React from "react";

const TodoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] ADD TODO":
      return [...initialState, action.payload];
    case "[TODO] DELETE TODO": // Agrega un nuevo caso para eliminar una tarea
      return initialState.filter((todo) => todo.id !== action.payload);
    default:
      return initialState;
  }
};

export default TodoReducer;
