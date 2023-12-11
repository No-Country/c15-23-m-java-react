import styled from 'styled-components';
import { colors, titleFont } from '../../styles/GlobalStyles';

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 20px;
    font-weight: bold;
    font-family: ${titleFont};
    color: ${colors.primaryText};
  }

  section {
    width: 95%;

    & > ul {
      width: 100%;
      padding: 0;
      list-style: none;
    }
    @media (min-width: 900px) {
      width: 70%;
    }
  }
`;

export { Main };
