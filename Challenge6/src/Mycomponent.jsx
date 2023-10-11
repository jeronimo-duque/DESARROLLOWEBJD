import React from 'react';
import useFetch from './useFetch'; // Asegúrate de que la ruta sea correcta

function MyComponent() {
  const url = 'https://api.giphy.com/v2/emoji?api_key=lNuTPcHMtNtzHDPAVryQQFqMTFn53F6Z&limit=10&offset=0'; // Reemplaza con la URL que desees

  const { data, isLoading, hasError } = useFetch(url);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error: {hasError.message}</div>;
  }

  // Ahora puedes utilizar los datos en 'data' en tu componente
  return (
    <div>
      <h2>Data from API:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default MyComponent;
