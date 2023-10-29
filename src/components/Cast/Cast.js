import { apiMoviesCast } from "../api";
import {
  CastText,
  CastMenu,
  CastItems,
  CastImage,
  CastTextWrapper,
  CastChar,
} from "./Cast.styled";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Cast() {
  const { movieId } = useParams();
  const location = useLocation();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getMoviesCast() {
      const movie = await apiMoviesCast(movieId);
      setCast(movie);
    }
    getMoviesCast();
  }, [setCast, movieId]);

  return (
    <CastMenu>
      {cast.cast &&
        cast.cast.map((item) => (
          <CastItems key={item.cast_id}>
            <CastImage
              src={
                item.profile_path
                  ? `
http://image.tmdb.org/t/p/w200${item.profile_path}`
                  : "images/noImage.webp"
              }
              alt={item.title}
            />
            <CastTextWrapper>
              <CastText>{item.name}</CastText>
              <CastChar>{item.character}</CastChar>
            </CastTextWrapper>
          </CastItems>
        ))}
    </CastMenu>
  );
}
