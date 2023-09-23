export async function getGifs() {
    try {
      const apiKey = 'TU_CLAVE_DE_API'; // Reemplaza 'TU_CLAVE_DE_API' con tu clave de API real de Giphy
      const searchTerm = 'G'; // Puedes cambiar esto para buscar otros GIFs
      const limit = 25;
      const offset = 0;
  
      const apiUrl = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${searchTerm}&limit=${limit}&offset=${offset}`;
  
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error obteniendo GIFs:', error);
      throw error;
    }
  }