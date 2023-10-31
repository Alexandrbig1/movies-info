import { Container, MoviesContainer } from "../Movies/Movies.styled";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { apiSearchMovies } from "../../components/api";
import MoviesList from "../../components/MoviesList/MoviesList";
// import toast, { Toaster } from "react-hot-toast";
import Button from "../../components/ButtonLoadMore/Button";
import Loader from "../../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  // const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [btnLoadMore, setBtnLoadMore] = useState(false);

  const query = searchParams.get("query") ?? "";

  async function getSearchMovies(e) {
    e.preventDefault();

    const queryEl = e.target.search.value;

    if (queryEl === "") {
      // toast.success("Enter your request, please!");
      toast.info("Enter your request, please!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (queryEl === query) {
      // toast.success("Enter new request, please!");
      toast.info("Enter new request, please!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

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

        const totalPage = Math.ceil(data.total_results / data.results.length);

        if (page === 1) {
          setMovies([...data.results]);
        } else {
          setMovies((movies) => [...movies, ...data.results]);
        }

        if (data.total_results) {
          if (data.results.length !== 0 && totalPage <= data.total_pages) {
            setBtnLoadMore(true);
          } else {
            toast.info(
              "We're sorry, but you've reached the end of search results.",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
                theme: "light",
              }
            );
            setBtnLoadMore(false);
          }
        }

        if (page < 2) {
          if (data.total_results === 0) {
            toast.info(
              "Sorry, we couldn't find any movies matching your search.",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
                theme: "light",
              }
            );
          } else {
            toast.success(`Hooray! We've found ${data.total_results} movies!`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              progress: undefined,
              theme: "light",
            });
          }
        }
      } catch (error) {
        setError(true);
        // toast.error("Oops, something went wrong! Reload this page!");
        toast.error("Oops, something went wrong! Reload this page!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setLoading(false);
      }
    }
    searchMovie();
  }, [query, page]);

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
      {movies.length !== 0 && btnLoadMore && (
        <Button onClick={onLoadMoreClick} />
      )}
      {loading && <Loader />}
      {error && toast.error("Oops, something went wrong! Reload this page!")}
    </Container>
  );
}
