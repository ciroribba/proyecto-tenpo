import axios from 'axios';
import { useCharacterStore } from './charactersStore';

export const fetchCharacters = async () => {
  const { setCharacters, setLoading, setError } = useCharacterStore.getState();

  setLoading(true);
  setError(null);

  try {
    // Simulamos una llamada a una API ficticia
    const response = await axios.get('https://api.disneyapi.dev/character?pageSize=2000');
    if (!response.data) throw new Error('Error al obtener usuarios');
    
    const dataCharacters = await response.data.data;
    setCharacters(dataCharacters);

  } catch (error) {
    setError((error as Error).message);
  } finally {
    setLoading(false);
  }
};
