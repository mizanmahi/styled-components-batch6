import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
   margin: 0;
   padding: 0;
   box-sizing: inherit;
   font-family: inherit ;
}

body {
   box-sizing: border-box;
   background-color: ${({ theme }) =>
      theme.mode === 'dark'
         ? theme.colors.veryDarkBlue
         : theme.colors.greyishWhite};
   height: 100vh;
   width: 100%;
   display: grid;
   place-items: center;
   padding: 0 1rem;
   font-family: 'Overpass', sans-serif;
   font-weight: 400 ;

}

`;
