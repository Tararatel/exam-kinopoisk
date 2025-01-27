import axios from 'axios';
import type { Films, Search } from './kinopoiskTypes';
import { FilmsSchema, SearchFilmsSchema } from './kinopoiskTypes';

export const kinopoiskApi = axios.create({
  baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/',
  headers: {
    'X-API-KEY': '5a68dc14-a2bd-4ac5-8bbe-4e37b855fcbf',
  },
});

export const kinopoiskApiSearch = axios.create({
  baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.1/',
  headers: {
    'X-API-KEY': '5a68dc14-a2bd-4ac5-8bbe-4e37b855fcbf',
  },
});

const validateFilms = (data: unknown): Films => {
  try {
    return FilmsSchema.parse(data);
  } catch (error) {
    console.error('Validation Error:', error);
    throw new Error('Некорректные данные');
  }
};

const validateSearchFilms = (data: unknown): Search => {
  try {
    return SearchFilmsSchema.parse(data);
  } catch (error) {
    console.error('Validation Error:', error);
    throw new Error('Некорректные данные');
  }
};

export const getTopMovies = async (): Promise<Films> => {
  try {
    const response = await kinopoiskApi.get<{ films: Films }>('/films/top', {
      params: { type: 'TOP_100_POPULAR_FILMS', page: 1 },
    });

    const validatedFilms = validateFilms(response.data.films);
    return validatedFilms;
  } catch (error) {
    console.error('Error fetching top movies:', error);
    throw error;
  }
};

export const searchMovies = async (query: string): Promise<Search> => {
  try {
    const response = await kinopoiskApiSearch.get<{ films: Search }>('/films/search-by-keyword', {
      params: { keyword: query },
    });

    const validatedFilms = validateSearchFilms(response.data.films);
    console.log(validatedFilms);

    return validatedFilms;
  } catch (error) {
    console.error('Error searching for movies:', error);
    throw error;
  }
};
