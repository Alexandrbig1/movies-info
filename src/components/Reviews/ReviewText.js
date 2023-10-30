import PropTypes from "prop-types";
import { useState } from "react";
import { ReviewText, BtnExpander } from "./ReviewText.styled";

export default function ReviewsText({
  children,
  collapsedNumWords = 20,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  expanded = false,
}) {
  const [isExpended, setIsExpended] = useState(expanded);

  const displayText = isExpended
    ? children
    : `${children.split(" ").slice(0, collapsedNumWords).join(" ")}...`;

  return (
    <div>
      <ReviewText>
        {children.split(" ").length > collapsedNumWords
          ? displayText
          : children}
        {children.split(" ").length > collapsedNumWords && (
          <BtnExpander onClick={() => setIsExpended((exp) => !exp)}>
            {isExpended ? collapseButtonText : expandButtonText}
          </BtnExpander>
        )}
      </ReviewText>
    </div>
  );
}

ReviewsText.propTypes = {
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  className: PropTypes.string,
  expanded: PropTypes.bool,
};
