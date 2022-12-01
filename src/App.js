import { useState } from 'react';
import RatingCard from './components/RatingCard/RatingCard';
import { GlobalStyle } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';

function App() {
   const [theme, setTheme] = useState({
      mode: 'dark',
      colors: {
         white: 'hsl(0, 0%, 100%)',
         greyishWhite: 'hsl(0,0%, 92%)',
         lightGrey: 'hsl(217, 12%, 63%)',
         MediumGrey: 'hsl(216, 12%, 54%)',
         mediumBlue: 'hsl(210, 16%, 22%)',
         darkBlue: 'hsl(213, 19%, 18%)',
         veryDarkBlue: 'hsl(216, 12%, 8%)',
         orange: 'hsl(25, 97%, 53%)',
      },
   });

   const themeSwitchHandler = () => {
      setTheme((theme) => ({
         ...theme,
         mode: theme.mode === 'dark' ? 'light' : 'dark',
      }));
   };

   return (
      <ThemeProvider theme={theme}>
         <div>
            <GlobalStyle />

            <button onClick={themeSwitchHandler}>
               {theme.mode === 'dark' ? 'Light' : 'Dark'}
            </button>

            <RatingCard />
         </div>
      </ThemeProvider>
   );
}

export default App;
