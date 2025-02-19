import { useCharacterStore } from '../stores/characters/charactersStore';

const useCharacters = () => {
  const users = useCharacterStore((state) => state.characters);
  const loading = useCharacterStore((state) => state.loading);
  const error = useCharacterStore((state) => state.error);

  return { users, loading, error };
};

export default useCharacters;