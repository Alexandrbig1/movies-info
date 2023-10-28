import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

export const SearchWrapper = styled.div`
  padding: 0.4rem 2.4rem;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  @media (max-width: 385px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const SearchInput = styled.input`
  padding: 1.2rem 2.4rem;
  width: 36rem;
  border: none;
  outline: none;
  /* outline: inset #dadada; */
  border: 1px solid #dadada;
  transition: 0.4s;

  &:hover {
    box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.1);
  }

  &::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: normal;
  }

  &:focus-within {
    box-shadow: inset 0 0 0.2rem 0.3rem rgba(255, 186, 8, 0.5);
  }

  @media (max-width: 385px) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  border: none;
  outline: none;
  padding: 1.2rem 2.4rem;
  border-radius: 0.4rem;
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.btnBgColor};
  color: ${(p) => p.theme.colors.darkBgColor};
  /* color: ${(p) => p.theme.colors.lightTextColor}; */
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: normal;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: ${(p) => p.theme.colors.btnBgHoverColor};
  }
`;

export const Icon = styled(BiSearchAlt)`
  font-size: 2.4rem;
`;
