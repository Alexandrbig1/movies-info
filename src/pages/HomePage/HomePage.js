import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import getApi from "../../components/api";
import { toast } from "react-toastify";
import {
  MoviesContainer,
  MoviesTitle,
  Container,
} from "../HomePage/HomePage.styled";

export default function HomePage() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    if (trending.length > 0) {
      return;
    }

    async function api() {
      try {
        const data = await getApi();
        setTrending(data.results);
      } catch (error) {
        toast.error("Oops, something went wrong! Reload this page!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    api();
  }, [trending]);

  return (
    <Container>
      <MoviesContainer>
        <MoviesTitle>Trending Today</MoviesTitle>
        <MoviesList movies={trending} />
      </MoviesContainer>
    </Container>
  );
}
