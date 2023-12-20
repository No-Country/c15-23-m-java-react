import styled from 'styled-components';
import { textFont, titleFont, colors } from '../../styles/GlobalStyles';

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


const SectionBtn = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  border: none;
  padding: 0px 20px 20px 20px;
  background-color: white;
  & a{
    text-decoration: none;
  }
  & button {
    text-decoration: none;
    margin: 0 5px;
    width: 120px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    background-color: ${colors.primaryColor};
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: ${colors.buttonHover};
    }
    &:disabled {
      opacity: 0.5;
    }
}
`;

export { Card, Content, Main, Section, Summary, SectionBtn };
