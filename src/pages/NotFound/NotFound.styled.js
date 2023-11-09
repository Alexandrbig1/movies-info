import styled from "styled-components";

export const PageNotFound = styled.h2`
  color: ${(p) => p.theme.colors.lightTextColor};
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-transform: uppercase;
  text-align: center;
  padding: 3rem;
`;

export const NotFoundContainer = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/images/bg.jpg),
    linear-gradient(to bottom, #272727, #262626);
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vh;
`;
