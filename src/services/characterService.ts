import axios from 'axios';
import { Character } from '../types/characterTypes';

export const fetchCharacters = async (): Promise<Character[]> => {
  const response = await axios.get('https://api.disneyapi.dev/character?pageSize=20');
  if (!response.data) throw new Error('Error al obtener usuarios');
  
  return response.data.data;
};