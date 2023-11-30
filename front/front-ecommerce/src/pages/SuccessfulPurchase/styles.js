import styled from 'styled-components';
import { textFont, titleFont } from '../../styles/GlobalStyles';

const Main = styled.main`
  width: 100%;
  display: grid;
  min-height: 100vh;
  align-content: center;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    align-content: center;
  }
`;

const Section = styled.section`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 20px;
`;

const Card = styled.article`
  width: 100%;
  border-radius: 1px;

  font-family: ${textFont};
  h1 {
    color: #56c9a0;
  }
  h1,
  h2 {
    font-size: 2rem;
    text-align: center;
    font-size: ${titleFont};
  }
  h2 {
    font-size: 2.5rem;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.4rem;
  }
  @media (min-width: 900px) {
    padding: 40px;
  }
`;

const Content = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  div > div {
    margin-bottom: 20px;
    p:first-child {
      font-size: 1.8rem;
      font-weight: bold;
      font-family: ${titleFont};
    }
  }
`;

const Summary = styled.section`
  padding: 20px;

  display: flex;
  align-items: center;
`;

export { Card, Content, Main, Section, Summary };
