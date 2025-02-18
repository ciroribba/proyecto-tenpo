import { useCharacterStore } from './charactersStore';
import { fetchCharacters as fetchCharactersService } from '../services/characterService';

export const fetchCharacters = async (size: number) => {
  const { setCharacters, setLoading, setError } = useCharacterStore.getState();

  setLoading(true);
  setError(null);

  try {
    const dataCharacters = await fetchCharactersService(size);
    setCharacters(dataCharacters);
  } catch (error) {
    setError((error as Error).message);
  } finally {
    setLoading(false);
  }
};
