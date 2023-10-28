import styled from "styled-components";

export const ButtonLoadMore = styled.button`
  border: none;
  outline: none;
  background-color: ${(p) => p.theme.colors.btnBgColor};
  color: ${(p) => p.theme.colors.darkBgColor};
  padding: 1.2rem 3.6rem;
  border-radius: 4px;
  font-size: 1.6rem;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: ${(p) => p.theme.colors.btnBgHoverColor};
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const ButtonLoadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 2.4rem;
`;
