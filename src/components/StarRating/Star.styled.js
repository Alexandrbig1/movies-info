import styled from "styled-components";
import { BsStar, BsStarFill } from "react-icons/bs";

export const FullStar = styled(BsStarFill)`
  color: ${(p) =>
    p.value !== 0 ? p.theme.colors.accent : p.theme.colors.btnBgColor};
  font-size: 1.6rem;
`;
export const EmptyStar = styled(BsStar)`
  color: ${(p) =>
    p.value !== 0 ? p.theme.colors.accent : p.theme.colors.btnBgColor};
  font-size: 1.6rem;
`;
