import { createGlobalStyle } from 'styled-components';

const titleFont = 'Montserrat, sans-serif';
const textFont = 'Merriweather Sans, sans-serif';

const colors = {
  primaryColor: 'rgba(86, 201, 160, 1)',
  primaryLightColor: 'rgba(86, 201, 160, 0.5)',
  primaryText: '#213547',
  grayBorders: ' #d9d9d9',
  buttonHover: ' #2b2d2c',
};

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
}

`;

export { GlobalStyles, textFont, titleFont, colors };
