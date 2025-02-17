import { create } from 'zustand';
import { Character, Info } from '../types/characterTypes';

interface CharacterState {
  characters: Character[];
  info: Info | null;
  loading: boolean,
  error: string | null,
  setCharacters: (characters: Character[]) => void;
  setInfo: (info: Info) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useCharacterStore = create<CharacterState>((set) => ({
  characters: [],
  info: null,
  loading: false,
  error: null,
  setCharacters: (characters) => set({ characters }),
  setInfo: (info) => set({ info }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
