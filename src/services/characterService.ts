import axios from 'axios';
import { Character } from '../types/characterTypes';
import { ENDPOINT } from '../config/endpoints';

export const fetchCharacters = async (size: number): Promise<Character[]> => {
  const response = await axios.get(`${ENDPOINT.FAKE_DATA_TABLE}?pageSize=${size}`);
  if (!response.data) throw new Error('Error al obtener usuarios');
  
  return response.data.data;
};