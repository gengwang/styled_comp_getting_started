import React, { PureComponent } from 'react';
import styled, {css, ThemeProvider} from 'styled-components';
import theme from 'styled-theming';

const Button = styled.button`
  background: transparent;
  border: 2px solid palevioletred;
  color: palevioletred;
  border-radius: 2px; 
  padding: 0.25em 1em;
  margin: 0 1em;
  ${props =>  
    props.primary &&
      css`
        background: palevioletred;
        color: white; 
      `
  }
`
const containerBackgroundColor = theme('mode', {
    light: '#fff',
    dark: '#000'
  })
  
const Container = styled.div`
  text-align: center;
  padding: 1em;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${containerBackgroundColor};
`

class MyComp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Container>
                <Button>Normal Button</Button>
                <Button primary>Primary Button</Button>
            </Container>
        );
    }
}

export default MyComp;