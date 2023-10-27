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
  /* background: linear-gradient(to bottom, #e9ecef, #343a40); */
  height: 100vh;
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
