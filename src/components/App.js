import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";
import Details from "./MovieDetails/MovieDetails";
import toast, { Toaster } from "react-hot-toast";
// import Movies from "../pages/Movies";
// import HomePage from "../pages/HomePage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Details />} />
        <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
        <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
