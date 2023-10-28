import {
  SearchedMoviesMenu,
  SearchedMoviesItems,
  SearchedMoviesTextWrap,
  SearchedMoviesTextTitle,
  SearchedMoviesWrap,
  SearchedMoviesImg,
  SearchedRatingWrapper,
  SearchedRatingIcon,
  SearchedRating,
} from "./SearchedMovies.styled";
import { Link } from "react-router-dom";

export default function SearchedMovies({ movies }) {
  function formatNumber(number) {
    if (number % 1 === 0) {
      return Math.floor(number);
    } else {
      return number;
    }
  }

  return (
    <SearchedMoviesMenu>
      {movies.map((item) => (
        <SearchedMoviesItems key={item.id}>
          <Link>
            <SearchedMoviesWrap>
              <SearchedMoviesTextWrap>
                <SearchedRatingWrapper>
                  <SearchedRatingIcon
                    value={formatNumber(item.vote_average.toFixed(1))}
                  />
                  <SearchedRating
                    value={formatNumber(item.vote_average.toFixed(1))}
                  >
                    {formatNumber(item.vote_average.toFixed(1))}
                  </SearchedRating>
                </SearchedRatingWrapper>
                <SearchedMoviesTextTitle>{item.title}</SearchedMoviesTextTitle>
              </SearchedMoviesTextWrap>
              <SearchedMoviesImg
                src={
                  item.poster_path
                    ? `
http://image.tmdb.org/t/p/w200${item.poster_path}`
                    : "images/noImage.webp"
                }
                alt={item.title}
              />
            </SearchedMoviesWrap>
          </Link>
        </SearchedMoviesItems>
      ))}
    </SearchedMoviesMenu>
  );
}
