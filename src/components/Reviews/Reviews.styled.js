import styled from "styled-components";
import { TfiCommentAlt } from "react-icons/tfi";

export const ReviewsIcon = styled(TfiCommentAlt)`
  font-size: 1.6rem;
`;

export const ReviewsAuthor = styled.span`
  color: ${(p) => p.theme.colors.darkBgColor};
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  line-height: 1.25;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const ReviewsMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
`;
export const ReviewsItems = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 1.2rem;
  padding: 1.2rem;
  gap: 1.2rem;

  &:nth-child(even) {
    background-color: #dee2e6;
  }
  &:nth-child(odd) {
    background-color: #ced4da;
  }
`;
