import { useEffect, useState } from "react";
import {
  DetailsContainer,
  DetailsCard,
  DetailsTextWrapper,
  Img,
} from "./MovieDetails.styled";
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
      <DetailsCard>
        <>
          <Img
            src={
              movies.poster_path
                ? `
http://image.tmdb.org/t/p/w200${movies.poster_path}`
                : "images/noImage.webp"
            }
            alt={movies.title}
          />
        </>
        <DetailsTextWrapper>
          <h2>{title}</h2>
          <h3>Genres:</h3>
          <span>{movies.release_date}</span>
          {movies.genres === undefined ? (
            ""
          ) : (
            <>
              {movies.genres.map((item) => (
                <span key={item.name}>{item.name} </span>
              ))}
            </>
          )}

          <span>
            {movies.vote_average !== undefined &&
              movies.vote_average.toFixed(2)}
          </span>
          <h3>Overview:</h3>
          <p>{overview}</p>
        </DetailsTextWrapper>
      </DetailsCard>
    </DetailsContainer>
  );
}
