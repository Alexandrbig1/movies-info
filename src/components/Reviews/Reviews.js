import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiMoviesReviews } from "../api";
import ReviewsText from "./ReviewText";
import { toast } from "react-toastify";

import {
  ReviewsMenu,
  ReviewsItems,
  ReviewsAuthor,
  ReviewsIcon,
} from "./Reviews.styled";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [reviewsTrue, setReviewsTrue] = useState(false);

  useEffect(() => {
    async function getMoviesCast() {
      try {
        const movie = await apiMoviesReviews(movieId);
        setReviews(movie.results);
        if (movie.results.length === 0) {
          setReviewsTrue(true);
        }
      } catch (error) {
        toast.error("Oops, something went wrong! Reload this page!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    getMoviesCast();
  }, [setReviews, movieId]);

  return (
    <ReviewsMenu>
      {reviews &&
        reviews.map(({ id, author, content }) => (
          <ReviewsItems key={id}>
            <ReviewsAuthor>
              <ReviewsIcon />
              {author}
            </ReviewsAuthor>
            <ReviewsText>{content}</ReviewsText>
          </ReviewsItems>
        ))}
      {reviewsTrue && (
        <ReviewsItems>We don't have any reviews for this movie.</ReviewsItems>
      )}
    </ReviewsMenu>
  );
}
