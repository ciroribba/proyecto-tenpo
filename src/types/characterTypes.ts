// Definición de los types basados en la respuesta de la API

export interface Info {
    count: number;
    totalPages: number;
    previousPage: string | null;
    nextPage: string | null;
  }
  
  export interface Character {
    _id: number;
    films: string[];
    shortFilms: string[];
    tvShows: string[];
    videoGames: string[];
    parkAttractions: string[];
    allies: string[];
    enemies: string[];
    sourceUrl: string;
    name: string;
    // Algunos personajes pueden no tener imageUrl
    imageUrl?: string;
    createdAt: string;
    updatedAt: string;
    url: string;
    __v: number;
  }
  
  export interface ApiResponse {
    info: Info;
    data: Character[];
  }
  