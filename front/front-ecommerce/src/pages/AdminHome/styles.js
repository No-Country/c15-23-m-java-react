import { styled } from 'styled-components';
import { colors, textFont, titleFont } from '../../styles/GlobalStyles';

const Main = styled.main`
  display: grid;
  grid-template-rows: 50px 1fr 1fr;
  h1 {
    height: 100%;
    padding: 10px 0;
    text-align: center;
    font-size: 2.5rem;
    font-family: ${titleFont};
    color: ${colors.primaryText};
  }
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  h2 {
    font-size: 2rem;
    font-family: ${titleFont};
    color: ${colors.primaryText};
    width: 95%;
    text-align: left;
    margin-bottom: 20px;
    @media (min-width: 900px) {
      width: 80%;
    }
  }
`;

const ShowMore = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  @media (min-width: 900px) {
    width: 80%;
  }

  a {
    width: 150px;
    padding: 10px 0;
    background-color: ${colors.primaryLightColor};
    border-radius: 8px;
    text-align: center;
    font-size: 1.4rem;
    font-family: ${textFont};
    color: ${colors.primaryText};
    font-weight: bold;
    text-decoration: none;
    &:hover {
      background-color: ${colors.primaryColor};
      color: white;
    }
  }
`;

const Actions = styled.div`
  margin-bottom: 20px;
  width: 95%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: flex-end;
  @media (min-width: 900px) {
    width: 80%;
  }
  button {
    width: 90%;
    max-width: 160px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primaryLightColor};
    color: ${colors.primaryText};
    font-size: 1.4rem;
    font-family: ${textFont};
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: ${colors.primaryColor};
      color: white;
    }
    svg {
      margin-right: 5px;
      font-size: 2rem;
      font-weight: bold;
    }
  }
`;

const SearchBar = styled.div`
  width: 100%;
  display: flex;
  input {
    width: 80%;
    padding-left: 10px;
    height: 30px;
    font-size: 1.3rem;
    font-family: ${textFont};
    font-weight: 400;
    border: 1px solid ${colors.grayBorders};
    border-radius: 5px;
    margin-right: 1px;
    &:focus {
      outline: 2px solid ${colors.primaryColor};
    }
  }
  button {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    svg {
      margin-right: 0;
    }
  }
`;

export { Main, Section, ShowMore, Actions, SearchBar };
