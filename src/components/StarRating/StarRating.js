import PropTypes from "prop-types";
import Star from "./Star";
import { StarContainer, StarText, StarTextWrapper } from "./StarRating.styled";

StarRating.propTypes = {
  maxRating: PropTypes.number.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.array,
  defaultRating: PropTypes.number,
  onSetTextStarsRate: PropTypes.func,
};

export default function StarRating({ rating, maxRating, value }) {
  return (
    <StarTextWrapper>
      <StarContainer>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            value={value}
            key={crypto.randomUUID()}
            full={rating ? rating >= i + 1 : rating >= i + 1 ? true : false}
          />
        ))}
        <StarText value={rating}>{rating}</StarText>
      </StarContainer>
    </StarTextWrapper>
  );
}
