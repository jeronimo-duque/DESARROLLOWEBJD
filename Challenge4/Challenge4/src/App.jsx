import React, { useState } from 'react';

function App() {
  const [category, setCategory] = useState(''); // Estado para el campo de entrada
  const [categories, setCategories] = useState([]); // Estado para la lista de categorías

  const handleInputChange = (e) => {
    setCategory(e.target.value); // Actualizar el estado de la categoría con el valor del campo de entrada
  };

  const handleAddCategory = () => {
    if (category.trim() !== '') {
      setCategories([...categories, category]); // Agregar la categoría a la lista
      setCategory(''); // Limpiar el campo de entrada
    }
  };

  return (
    <div>
      <h1>Category List</h1>
      <input
        type="text"
        placeholder="Enter a category"
        value={category}
        onChange={handleInputChange}
      />
      <button onClick={handleAddCategory}>Add Category</button>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
  