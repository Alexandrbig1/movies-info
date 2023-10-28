import { useEffect, useState } from "react";
import {
  DetailsContainer,
  DetailsCard,
  DetailsTextWrapper,
  Img,
  DetailsTitle,
  DetailsGenre,
  GenresWrapper,
  Genre,
  MovieDetailsText,
  TextWrapper,
  DetailsRating,
} from "./MovieDetails.styled";
import {
  RatingWrapper,
  RatingIcon,
} from "../../components/MoviesList/MoviesList.styled";
import { useLocation, useParams } from "react-router-dom";
import { apiMoviesById } from "../../components/api";
import StarRating from "../../components/StarRating/StarRating";

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

  function formatNumber(number) {
    if (number % 1 === 0) {
      return Math.floor(number);
    } else {
      return number;
    }
  }

  const { title, genres, overview, release_date, poster_path, vote_average } =
    movies;
  return (
    <DetailsContainer>
      <DetailsCard>
        <>
          <Img
            src={
              poster_path
                ? `
http://image.tmdb.org/t/p/w200${poster_path}`
                : `${process.env.PUBLIC_URL}/images/noImage.webp`
            }
            alt={title}
          />
        </>
        <DetailsTextWrapper>
          <DetailsTitle>{title}</DetailsTitle>
          <TextWrapper>
            <DetailsGenre>Genres:</DetailsGenre>
            <GenresWrapper>
              {genres === undefined ? (
                ""
              ) : (
                <>
                  {genres.map(({ name }) => (
                    <Genre key={name}>{name}</Genre>
                  ))}
                </>
              )}
            </GenresWrapper>
          </TextWrapper>
          <TextWrapper>
            <DetailsGenre>Release Date:</DetailsGenre>
            <Genre>{release_date}</Genre>
          </TextWrapper>
          <StarRating
            maxRating={10}
            rating={
              vote_average !== undefined &&
              formatNumber(vote_average.toFixed(1))
            }
            value={
              vote_average !== undefined &&
              formatNumber(vote_average.toFixed(1))
            }
          />
          <TextWrapper>
            <DetailsGenre>Overview:</DetailsGenre>
            <MovieDetailsText>{overview}</MovieDetailsText>
          </TextWrapper>
        </DetailsTextWrapper>
      </DetailsCard>
    </DetailsContainer>
  );
}
