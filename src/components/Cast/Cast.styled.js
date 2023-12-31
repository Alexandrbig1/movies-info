import styled from "styled-components";

export const CastWrapper = styled.div``;

export const CastText = styled.span`
  color: #050505;
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const CastMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
`;

export const CastItems = styled.li`
  display: flex;

  &:nth-child(even) {
    background-color: #dee2e6;
  }
  &:nth-child(odd) {
    background-color: #ced4da;
  }
`;

export const CastImage = styled.img`
  width: 4.2rem;
  height: 6.3rem;
`;

export const CastTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 0 1.2rem;
`;

export const CastChar = styled.span`
  color: #050505;
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const CastCharAs = styled.span`
  color: rgba(5, 5, 5, 0.5);
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
`;
