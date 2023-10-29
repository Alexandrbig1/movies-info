import styled from "styled-components";

export const ReviewsText = styled.p`
  color: #050505;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const ReviewsMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
`;
export const ReviewsItems = styled.li`
  display: flex;

  &:nth-child(even) {
    background-color: ${(p) => p.theme.colors.btnBgColor};
    background-color: #dee2e6;
  }
  &:nth-child(odd) {
    background-color: ${(p) => p.theme.colors.btnBgColor};
    background-color: #ced4da;
  }
`;
