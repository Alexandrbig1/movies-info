import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const KEY = "96525b58fad95f33b6786cec803d2857";

export default async function getApi() {
  const data = await axios.get(`${URL}/trending/movie/day?api_key=${KEY}`);

  return data.data;
}

export async function apiSearchMovies(query, page) {
  const data = await axios.get(
    `${URL}/search/movie?api_key=${KEY}&query=${query}&page=${page}`
  );

  return data.data;
}

export async function apiMoviesById(id) {
  const data = await axios.get(`${URL}/movie/${id}?api_key=${KEY}`);

  return data.data;
}

export async function apiMoviesCast(id) {
  const data = await axios.get(`${URL}/movie/${id}/credits?api_key=${KEY}`);

  return data.data;
}
export async function apiMoviesReviews(id) {
  const data = await axios.get(`${URL}/movie/${id}/reviews?api_key=${KEY}`);

  return data.data;
}
