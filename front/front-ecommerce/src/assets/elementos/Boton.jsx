import styled from 'styled-components';
import { colors, textFont } from '../../styles/GlobalStyles';

const Boton = styled.button`
  background-color: #56c9a0;
  border: none;
  color: #fff;
  border-radius: 10px;
  font-family: ${textFont};
  cursor: pointer;
  font-size: 16px;
  // font-size: 1.6rem;
  font-weight: 700;
  padding: 15px;
  text-align: center;
  width: 100%;
  &:hover {
    background-color: ${colors.buttonHover};
  }
`;

export default Boton;
