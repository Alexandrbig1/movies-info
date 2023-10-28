import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import getApi from "../api";
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
import { Link, useLocation } from "react-router-dom";
// import { apiMoviesById } from "../api";

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
      {movies.map((item) => (
        <MoviesItems key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            <MoviesWrap>
              <MoviesTextWrap>
                <RatingWrapper>
                  <RatingIcon
                    value={formatNumber(item.vote_average.toFixed(1))}
                  />
                  <Rating value={formatNumber(item.vote_average.toFixed(1))}>
                    {formatNumber(item.vote_average.toFixed(1))}
                  </Rating>
                </RatingWrapper>
                <MoviesTextTitle>{item.title}</MoviesTextTitle>
              </MoviesTextWrap>
              <MoviesImg
                src={
                  item.poster_path
                    ? `
http://image.tmdb.org/t/p/w200${item.poster_path}`
                    : "images/noImage.webp"
                }
                alt={item.title}
              />
            </MoviesWrap>
          </Link>
        </MoviesItems>
      ))}
    </MoviesMenu>
  );
}
