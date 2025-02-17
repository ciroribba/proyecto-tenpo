import { useCharacterStore } from './charactersStore';
import { fetchCharacters as fetchCharactersService } from '../services/characterService';

export const fetchCharacters = async () => {
  const { setCharacters, setLoading, setError } = useCharacterStore.getState();

  setLoading(true);
  setError(null);

  try {
    const dataCharacters = await fetchCharactersService();
    setCharacters(dataCharacters);
  } catch (error) {
    setError((error as Error).message);
  } finally {
    setLoading(false);
  }
};
