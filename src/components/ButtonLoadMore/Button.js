import { ButtonLoadMore, ButtonLoadMoreWrapper } from "./Button.styled";

export default function Button({ onClick }) {
  return (
    <ButtonLoadMoreWrapper>
      <ButtonLoadMore onClick={onClick}>Load More</ButtonLoadMore>
    </ButtonLoadMoreWrapper>
  );
}
