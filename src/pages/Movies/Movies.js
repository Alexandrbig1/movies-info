import { Container, MoviesContainer } from "./Movies.styled";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Movies() {
  return (
    <>
      <SearchBar />
      <Container>
        <MoviesContainer>{/* <MoviesList /> */}</MoviesContainer>
      </Container>
    </>
  );
}
