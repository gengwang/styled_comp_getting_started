import React from 'react';
import './App.css';
import styled, {css, ThemeProvider} from 'styled-components';
import theme from 'styled-theming';
import MyComp from './MyComp'


const containerBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000'
})



function App() {
  return (
    <ThemeProvider theme={{mode: 'dark'}}>
      <MyComp />
    </ThemeProvider>
  );
}

export default App;
