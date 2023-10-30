import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
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
