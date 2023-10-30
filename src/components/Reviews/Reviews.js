import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { apiMoviesReviews } from "../api";
import ReviewsText from "./ReviewText";
import toast, { Toaster } from "react-hot-toast";
import {
  ReviewsMenu,
  ReviewsItems,
  ReviewsAuthor,
  ReviewsIcon,
} from "./Reviews.styled";

export default function Reviews() {
  const { movieId } = useParams();
  const location = useLocation();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getMoviesCast() {
      try {
        const movie = await apiMoviesReviews(movieId);
        setReviews(movie.results);
      } catch (error) {
        toast.error("Oops, something went wrong! Reload this page!");
      }
    }
    getMoviesCast();
  }, [setReviews, movieId]);

  return (
    <ReviewsMenu>
      {reviews && reviews.length === 0 ? (
        <ReviewsItems>We don't have any reviews for this movie.</ReviewsItems>
      ) : (
        reviews &&
        reviews.map(({ id, author, content }) => (
          <ReviewsItems key={id}>
            <ReviewsAuthor>
              <ReviewsIcon />
              {author}
            </ReviewsAuthor>
            <ReviewsText>{content}</ReviewsText>
          </ReviewsItems>
        ))
      )}
      <Toaster position="top-right" />
    </ReviewsMenu>
  );
}
