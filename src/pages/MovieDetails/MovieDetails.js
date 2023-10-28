import { useEffect, useState } from "react";
import { DetailsContainer } from "./MovieDetails.styled";
import { useLocation, useParams } from "react-router-dom";
import { apiMoviesById } from "../../components/api";

export default function Details() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMoviesById() {
      const movie = await apiMoviesById(movieId);
      console.log(movie);
      setMovies(movie);
    }
    getMoviesById();
  }, [movieId, setMovies]);

  const { title, genres, overview } = movies;
  return (
    <DetailsContainer>
      <h2>{title}</h2>
      <h3>Genres:</h3>
      <h3>{movies.release_date}</h3>
      {movies.genres === undefined ? (
        ""
      ) : (
        <>
          {movies.genres.map((item) => (
            <span key={item.name}>{item.name} </span>
          ))}
        </>
      )}

      <img src={`http://image.tmdb.org/t/p/w200${movies.poster_path}`} />
      <h3>
        {movies.vote_average !== undefined && movies.vote_average.toFixed(2)}
      </h3>
      <h3>Overview:</h3>
      <p>{overview}</p>
    </DetailsContainer>
  );
}
