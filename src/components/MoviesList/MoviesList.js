import { useEffect, useState } from "react";
import getApi from "../../components/api";
import {
  MoviesItems,
  MoviesMenu,
  MoviesTextWrap,
  MoviesTextTitle,
  MoviesWrap,
  MoviesImg,
} from "./MoviesList.styled.js";
import { Link } from "react-router-dom";

export default function MoviesList() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    // if (trending.length === 0) {
    //   return;
    // }

    async function api() {
      const data = await getApi();
      setTrending(data.results);
    }
    api();
  }, []);
  return (
    <MoviesMenu>
      {trending.map((item) => (
        <MoviesItems key={item.id}>
          <Link>
            <MoviesWrap>
              <MoviesTextWrap>
                <MoviesTextTitle>{item.title}</MoviesTextTitle>
              </MoviesTextWrap>
              <MoviesImg
                src={`
http://image.tmdb.org/t/p/w200${item.poster_path}`}
                alt={item.title}
              />
            </MoviesWrap>
          </Link>
        </MoviesItems>
      ))}
    </MoviesMenu>
  );
}
