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
}

`;
