import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const MoviesMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  gap: 2.4rem;
  padding: 1.2rem 2.4rem;
`;

export const MoviesItems = styled.li`
  border-radius: 0.4rem;
  overflow: hidden;
  @media (max-width: 520px) {
    display: block;
    width: 40rem;
    height: auto;
  }
`;

export const MoviesWrap = styled.div`
  background-color: ${(p) => p.theme.colors.moviesWrapDarkColor};

  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: 20rem;
  height: 40rem;

  @media (max-width: 520px) {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const MoviesTextWrap = styled.div`
  padding: 2.4rem 2.4rem 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: start;
`;

export const MoviesTextTitle = styled.span`
  color: ${(p) => p.theme.colors.lightTextColor};
  font-family: "Roboto", sans-serif;
  height: 40px;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  padding-bottom: 4.5rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 520px) {
    font-size: 2.4rem;
    height: auto;
    padding-bottom: 2rem;
  }
`;

export const MoviesImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Rating = styled.span`
  color: ${(p) =>
    p.value !== 0 ? p.theme.colors.white : p.theme.colors.btnBgColor};
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  line-height: 1.25;
`;

export const RatingIcon = styled(FaStar)`
  color: ${(p) =>
    p.value !== 0 ? p.theme.colors.accent : p.theme.colors.btnBgColor};
  font-size: 1.6rem;
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;
