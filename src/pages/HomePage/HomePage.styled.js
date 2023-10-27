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

// export const MoviesMenu = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: start;
//   gap: 2.4rem;
//   padding: 1.2rem 2.4rem;
// `;

// export const MoviesList = styled.li`
//   border-radius: 0.4rem;
//   overflow: hidden;

//   @media (max-width: 520px) {
//     display: block;
//     width: 40rem;
//     height: 60rem;
//   }
// `;

// export const MoviesWrap = styled.div`
//   /* background-color: ${(p) => p.theme.colors.darkBgColor}; */
//   background-color: ${(p) => p.theme.colors.moviesWrapDarkColor};

//   border-radius: 0.4rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   overflow: hidden;
//   width: 20rem;
//   height: 36rem;

//   @media (max-width: 520px) {
//     display: block;
//     width: 100%;
//     height: 100%;
//   }
// `;

// export const MoviesTextWrap = styled.div`
//   padding: 2.4rem;
//   display: flex;
//   /* align-items: center; */
//   justify-content: start;
// `;

// export const MoviesTextTitle = styled.span`
//   color: ${(p) => p.theme.colors.lightTextColor};
//   font-family: Arial, Helvetica, sans-serif;
//   font-size: 1.6rem;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 1.16;
//   text-overflow: ellipsis;
//   overflow: hidden;
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
//   -webkit-line-clamp: 2;
//   /* border-bottom: 1px solid transparent; */

//   &:hover {
//     text-decoration: underline;
//     /* border-bottom: 1px solid #050505; */
//   }

//   @media (max-width: 520px) {
//     font-size: 2.4rem;
//   }
// `;

// export const MoviesImg = styled.img`
//   width: 100%;
//   height: 100%;
// `;
