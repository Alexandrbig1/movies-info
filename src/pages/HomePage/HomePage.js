import {
  MoviesContainer,
  MoviesTitle,
  Container,
} from "../HomePage/HomePage.styled";
import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import getApi from "../../components/api";

export default function HomePage() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function api() {
      const data = await getApi();
      setTrending(data.results);
    }
    api();
  }, []);

  return (
    <Container>
      <MoviesContainer>
        <MoviesTitle>Trending Today</MoviesTitle>
        <MoviesList movies={trending} />
      </MoviesContainer>
    </Container>
  );
}
