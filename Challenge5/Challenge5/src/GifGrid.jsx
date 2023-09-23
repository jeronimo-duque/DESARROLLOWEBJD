// GifGrid.jsx
import React, { useState, useEffect } from 'react';
import { getGifs } from './Api'; // Importa la función getGifs desde tu archivo de API

function GifGrid() {
  const [gifs, setGifs] = useState([]); // Estado para la lista de GIFs

  // Paso 4: Invoca getGifs dentro de una función asincrónica
  const fetchData = async () => {
    try {
      const gifData = await getGifs(); // Invoca getGifs
      console.log(gifData);
      setGifs(gifData); // Actualiza el estado con los GIFs
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  // Paso 6: Utiliza useEffect para llamar a fetchData cuando se monta el componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="gif-grid"> 
      {gifs.map((gif, index) => (
        <GifItem key={index} gifData={gif} />
      ))}
    </div>
  );
}

export default GifGrid;