import { styled } from 'styled-components';
import { colors, titleFont } from '../../styles/GlobalStyles';

const ContainerVolver = styled.div`
  width: 95%;
  margin: 20px;
  margin-bottom: 50px;
  border-radius: 10px;
  //box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${colors.primaryLightColor};
  color: black;
  padding-inline: 40px;
  @media (max-width: 576px) {
    margin-inline: 10px;
    padding-inline: 20px;
  }
`;

const DivVolver = styled.div`
  height: 80px;
  display: flex;
  font-size: 2rem;
  font-family: ${titleFont};
  align-items: center;
`;

const DivTitulo = styled.div`
  height: 80px;
  display: flex;
  font-family: ${titleFont};
  align-items: center;
  & h2 {
    font-size: 44px;
  }
  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export { ContainerVolver, DivVolver, DivTitulo };
