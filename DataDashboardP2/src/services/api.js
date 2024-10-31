import axios from "axios";

export const API_KEY = "214df2a6de824123cdc3287f588ab506";
export const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchPopularMovies = async () => {
  const response = await api.get("/movie/popular");
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};
