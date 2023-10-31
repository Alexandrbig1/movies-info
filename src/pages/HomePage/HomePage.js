import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import getApi from "../../components/api";
import toast, { Toaster } from "react-hot-toast";
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
        toast.error("Oops, something went wrong! Reload this page!");
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
      <Toaster position="top-right" />
    </Container>
  );
}
