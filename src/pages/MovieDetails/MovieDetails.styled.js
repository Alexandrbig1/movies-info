import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const DetailsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 4.8rem 2.4rem;
  background: linear-gradient(to bottom, #e9ecef 10%, #343a40);
`;

export const DetailsCard = styled.div`
  position: relative;
  display: flex;
  width: 60%;
  gap: 2.4rem;
  border: 0.1rem solid ${(p) => p.theme.colors.btnBgColor};
  padding: 2.4rem;
  border-radius: 1.2rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);

  @media (max-width: 1450px) {
    width: 80%;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
  @media (max-width: 630px) {
    width: 100%;
  }
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const DetailsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  width: 24rem;
  height: 36rem;
`;

export const DetailsTitle = styled.h2`
  color: ${(p) => p.theme.colors.darkBgColor};
  font-family: "Roboto", sans-serif;
  font-size: 3.6rem;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;

  @media (max-width: 1200px) {
    font-size: 2.4rem;
  }
`;

export const DetailsGenre = styled.span`
  color: #050505;
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const GenresWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const Genre = styled.span`
  overflow: hidden;
  color: rgba(5, 5, 5, 0.7);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
`;

export const MovieDetailsText = styled.p`
  color: ${(p) => p.theme.colors.darkBgColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsRating = styled.span`
  color: ${(p) =>
    p.value !== 0 ? p.theme.colors.darkBgColor : p.theme.colors.btnBgColor};
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  line-height: 1.25;
`;

export const BackLinkWrapper = styled.button`
  position: absolute;
  top: -3.4rem;
  left: 2.4rem;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  color: ${(p) => p.theme.colors.white};
  display: flex;
  align-items: center;
  gap: 1.2rem;

  &:hover {
    border-bottom: 0.1rem solid #000;
  }
`;

export const BackLink = styled(Link)`
  color: ${(p) => p.theme.colors.moviesWrapDarkColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.25;
`;

export const BackArrow = styled(BsArrowLeft)`
  font-size: 1.6rem;
  color: ${(p) => p.theme.colors.darkBgColor};
`;

export const CastIcon = styled(BsArrowRight)`
  font-size: 1.6rem;
  transition: 0.3s;
`;

export const CastLink = styled(Link)`
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.4s ease-in-out;

  color: #050505;
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 10rem;

  &:hover {
    & > ${CastIcon} {
      color: ${(p) => p.theme.colors.accent};
      margin-left: 0.8rem;
    }
  }
`;

export const CastMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const CastItems = styled.li`
  width: 100%;
`;
