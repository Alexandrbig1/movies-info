import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";
// import Cast from "./Cast/Cast";
// import Movies from "../pages/Movies";
// import HomePage from "../pages/HomePage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const Details = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Details />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
