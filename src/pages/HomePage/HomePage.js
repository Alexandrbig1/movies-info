import { MoviesContainer, MoviesTitle, Container } from "./HomePage.styled";
import MoviesList from "../../components/MoviesList/MoviesList";

export default function HomePage() {
  return (
    <Container>
      <MoviesContainer>
        <MoviesTitle>Trending Today</MoviesTitle>
        <MoviesList />
      </MoviesContainer>
    </Container>
  );
}
