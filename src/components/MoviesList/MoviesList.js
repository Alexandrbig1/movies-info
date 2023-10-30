import { Link, useLocation } from "react-router-dom";
import {
  MoviesItems,
  MoviesMenu,
  MoviesTextWrap,
  MoviesTextTitle,
  MoviesWrap,
  MoviesImg,
  Rating,
  RatingIcon,
  RatingWrapper,
} from "./MoviesList.styled.js";

export default function MoviesList({ movies }) {
  const location = useLocation();

  function formatNumber(number) {
    if (number % 1 === 0) {
      return Math.floor(number);
    } else {
      return number;
    }
  }

  return (
    <MoviesMenu>
      {movies.map(({ id, vote_average, title, poster_path }) => (
        <MoviesItems key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MoviesWrap>
              <MoviesTextWrap>
                <RatingWrapper>
                  <RatingIcon value={formatNumber(vote_average.toFixed(1))} />
                  <Rating value={formatNumber(vote_average.toFixed(1))}>
                    {formatNumber(vote_average.toFixed(1))}
                  </Rating>
                </RatingWrapper>
                <MoviesTextTitle>{title}</MoviesTextTitle>
              </MoviesTextWrap>
              <MoviesImg
                src={
                  poster_path
                    ? `
http://image.tmdb.org/t/p/w200${poster_path}`
                    : "images/noImage.webp"
                }
                alt={title}
              />
            </MoviesWrap>
          </Link>
        </MoviesItems>
      ))}
    </MoviesMenu>
  );
}
