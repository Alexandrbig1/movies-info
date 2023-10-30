import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${process.env.PUBLIC_URL}/images/bg.jpg),
    linear-gradient(to bottom, #272727, #262626);
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem;
  @media (max-width: 520px) {
    padding: 1.2rem;
  }
`;

export const MoviesTitle = styled.h2`
  color: ${(p) => p.theme.colors.darkBgColor};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-transform: uppercase;
  text-align: center;
`;
