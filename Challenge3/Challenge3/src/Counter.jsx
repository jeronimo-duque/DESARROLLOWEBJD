import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleSubtract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAdd}>Add</button> {/* Nuevo botón para sumar */}
    </div>
  );
}

export default Counter;
