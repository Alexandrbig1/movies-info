import axios from "axios";

// https://api.themoviedb.org/3/movie/550?api_key=96525b58fad95f33b6786cec803d2857

// const options = {};

const URL = "https://api.themoviedb.org/3";
// const URL = "https://api.themoviedb.org";
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
