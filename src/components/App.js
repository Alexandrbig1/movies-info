import { AppDiv } from "./GlobalStyle";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Movies from "../pages/Movies";
import HomePage from "../pages/HomePage";

export default function App() {
  return (
    <AppDiv>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
        <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
        <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
      </Routes>
    </AppDiv>
  );
}
