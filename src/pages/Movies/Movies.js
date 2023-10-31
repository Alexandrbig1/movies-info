import { Container, MoviesContainer } from "../Movies/Movies.styled";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { apiSearchMovies } from "../../components/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import toast, { Toaster } from "react-hot-toast";
import Button from "../../components/ButtonLoadMore/Button";
import Loader from "../../components/Loader/Loader";
import { useLocation, useSearchParams } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  // const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  // console.log(query);

  async function getSearchMovies(e) {
    e.preventDefault();
    const queryEl = e.target.search.value;

    const searchedMovie = queryEl !== "" ? { query: queryEl } : {};
    setSearchParams(searchedMovie);

    // setSearch(queryEl);

    setPage(1);
    setMovies([]);
  }

  function onLoadMoreClick() {
    setPage((page) => page + 1);
  }

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function searchMovie() {
      try {
        setLoading(true);
        setError(false);
        const data = await apiSearchMovies(query, page);

        setMovies((movies) => [...movies, ...data.results]);

        if (page < 2) {
          toast.success(`Hooray! We found ${data.total_results} images!`);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    searchMovie();
  }, [page, query]);

  // function updateQueryString(query) {
  //   const searchedMovie = query !== "" ? { query } : {};
  //   setSearchParams(searchedMovie);
  // }

  return (
    <Container>
      <SearchBar
        value={query}
        // onChange={updateQueryString}
        onSearch={getSearchMovies}
      />
      {movies.length > 0 && (
        <MoviesContainer>
          <MoviesList movies={movies} />
        </MoviesContainer>
      )}
      {movies.length > 1 && <Button onClick={onLoadMoreClick} />}
      {loading && <Loader />}
      {error && toast.error("Oops, something went wrong! Reload this page!")}
      <Toaster position="top-right" />
    </Container>
  );
}
