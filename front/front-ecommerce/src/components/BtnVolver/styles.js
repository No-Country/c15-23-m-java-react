import { styled } from 'styled-components';
import { textFont } from '../../styles/GlobalStyles';

const Button = styled.button`
  background-color: #d9d9d9;;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px;
  text-align: center;
  margin-inline: 20px;
  border-radius: 10px;
  font-family: ${textFont};
  color: black;
  align-items: center;
  display: flex;
  p {
    padding-inline: 15px;
    font-family: ${textFont};
    margin: 0px
  }
  &:hover{
      background-color: #39ad84;
  }
`;

export { Button };
