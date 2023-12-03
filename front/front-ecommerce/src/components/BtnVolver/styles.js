import { styled } from 'styled-components';
import { textFont } from '../../styles/GlobalStyles';

const Button = styled.button`
  display: flex;
  background-color: #d9d9d9;
  // color: black;
  // padding-inline: 0px;
  cursor: pointer;
  p {
    padding-inline: 15px;
    font-family: ${textFont};
  }
  &:hover {
    border-color: black;
  }
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 0em;
  font-size: 1em;
  // font-weight: 500;
  font-family: inherit;
  // background-color: #1a1a1a;
  transition: border-color 0.25s;
  button:hover {
  border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
  }
`;

export { Button };
