import { ReviewsMenu, ReviewsItems } from "./Reviews.styled";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { apiMoviesReviews } from "../api";

export default function Reviews() {
  const { movieId } = useParams();
  const location = useLocation();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getMoviesCast() {
      const movie = await apiMoviesReviews(movieId);
      console.log(movie);
      setReviews(movie);
    }
    getMoviesCast();
  }, [setReviews, movieId]);

  return (
    <ReviewsMenu>
      {reviews.results && reviews.results.length === 0 ? (
        <ReviewsItems>We don't have any reviews for this movie.</ReviewsItems>
      ) : (
        reviews.results &&
        reviews.results.map(({ id, author, content }) => (
          <ReviewsItems key={id}>
            <span>{author}</span>
            <p>{content}</p>
          </ReviewsItems>
        ))
      )}
    </ReviewsMenu>
  );
}
