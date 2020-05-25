import React, {PureComponent} from 'react';
import './App.css';
import styled, {css, ThemeProvider} from 'styled-components';
import theme from 'styled-theming';
import MyComp from './MyComp';

const containerBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000'
})

const lightTheme = {
  backgroundColor: 'white',
  borderColor: 'gray',
  color: '#333',
  primaryBackgroundColor: 'gray',
  primaryBorderColor: 'gray',
  primaryColor: 'gray',
};

const darkTheme = {
  backgroundColor: 'black',
  borderColor: 'red',
  color: '#ff0000',
  primaryBackgroundColor: 'red',
  primaryBorderColor: 'red',
  primaryColor: 'white',
};

const violetRedTheme = {
  backgroundColor: 'transparent',
  borderColor: 'palevioletred',
  color: 'palevioletred',
  primaryBackgroundColor: 'palevioletred',
  primaryBorderColor: 'palevioletred',
  primaryColor: 'white',
};

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { theme: lightTheme };
  }
  handleButtonClick = (which) => {
    console.log("normal was clicked:", which);
    this.setState({
      theme: which === 'primary'? darkTheme : lightTheme,
    })
  }
  render() {
    const {theme} = this.state;
    return (
      // <ThemeProvider theme={{mode: 'dark'}}>
      <div>
        <ThemeProvider theme={theme}>
          <MyComp onButtonClick={this.handleButtonClick} labels={{normal: 'Set Light Theme', primary: 'Set Dark Theme'}} />
        </ThemeProvider>        
        
        <ThemeProvider theme={lightTheme}>
          <MyComp />
        </ThemeProvider>

        <ThemeProvider theme={darkTheme}>
          <MyComp />
        </ThemeProvider>

        <ThemeProvider theme={violetRedTheme}>
          <MyComp />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;