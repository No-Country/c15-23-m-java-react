import { styled } from 'styled-components';
import { textFont, colors } from '../../styles/GlobalStyles';

const Button = styled.button`
  background-color: ${colors.primaryColor};
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  font-family: ${textFont};
  align-items: center;
  display: flex;
  p {
    padding-inline: 15px;
    font-family: ${textFont};
    margin: 0px;
  }
  &:hover {
    background-color: #39ad84;
  }
  @media (max-width: 576px) {
    margin: 0 auto;
  }
`;

export { Button };
