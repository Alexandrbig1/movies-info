import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";
// import Movies from "../pages/Movies";
// import HomePage from "../pages/HomePage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Movies = lazy(() => import("../pages/Movies/Movies"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
        <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
        <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
      </Route>
    </Routes>
  );
}
