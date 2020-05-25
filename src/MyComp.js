import React, { PureComponent } from 'react';
import styled, {css} from 'styled-components';

const Button = styled.button`
  transition: background-color .5s ease-out, color .25s ease;
  background: ${props => props.theme.backgroundColor};
  border: 2px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.color};
  border-radius: 2px; 
  padding: 0.25em 1em;
  margin: 0 1em;
  ${props =>  
    props.primary &&
      css`
        background: ${props => props.theme.primaryBackgroundColor};
        color: white; 
      `
  }
`
// FIXME: default not working
Button.defaultProps = {
  theme: {
    backgroundColor: 'white',
    borderColor: 'gray',
    color: '#333',
    primaryBackgroundColor: 'gray',
    primaryBorderColor: 'gray',
    primaryColor: 'gray',
  }
};
  
const Container = styled.div`
  text-align: center;
  padding: 1em;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.backgroundColor};
`

class MyComp extends PureComponent {
    static defaultProps = {
      labels: {
        normal: 'Normal Button',
        primary: 'Primary Button',
      },
      onButtonClick: (e) => {console.log("onButtonClick");
      },
    }
    constructor(props) {
        super(props);
    }
    render() {
      const {labels} = this.props;
         return (
            <Container>
                <Button onClick={(e)=>this.props.onButtonClick('normal', e)}>{labels.normal}</Button>
                <Button primary onClick={e => this.props.onButtonClick('primary', e)}>{labels.primary}</Button>
            </Container>
        );
    }
}

export default MyComp;