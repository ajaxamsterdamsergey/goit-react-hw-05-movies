import axios from 'axios';
const API_KEY = '34fc95322fa082bd00768bf11ed9b6d7';
const baseURL = (axios.defaults.baseURL = `https://api.themoviedb.org/3/`);

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${baseURL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovie = async movie_id => {
  const response = await axios.get(
    `${baseURL}movie/${movie_id}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getCast = async movie_id => {
  const response = await axios.get(
    `${baseURL}movie/${movie_id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const getReviews = async movie_id => {
  const response = await axios.get(
    `${baseURL}movie/${movie_id}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};

export const getSearchMovies = async searchQuery => {
  const response = await axios.get(
    `${baseURL}search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
  return response.data;
};
