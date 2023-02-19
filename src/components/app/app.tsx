import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import { grey, teal } from '@mui/material/colors';
import nextId from "react-id-generator";
import { getItemsTasks } from '../../servises/actions/tasks-detail';
import { MainContainer } from '../main-container/main-container';
import { AppDispatch } from '../../servises/store';
import { ColorModeContext } from '../../servises/color-mode-context';
import { NavbarLeft } from '../navbar-left/navbar-left';
import styles from './app.module.css';




const getDesignTokens = (mode: PaletteMode) => ({
  palette: {

    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: teal,
        divider: teal[200],
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
      : {
        // palette values for dark mode
        primary: teal,
        divider: teal[700],
        background: {
          default: teal[900],
          paper: teal[900],
        },
        text: {
          primary: '#fff',
          secondary: '#8e24aa',
        },
      }),
  },
});




function App() {
  const dispatch: AppDispatch = useDispatch();
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // htmlId = nextId();
  useEffect(() => {
    dispatch(getItemsTasks());

  }, [dispatch])


  return (
    <div className={styles.app}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>

          {/* <Header /> */}
          < NavbarLeft />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App; 