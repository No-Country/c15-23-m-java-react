import { styled } from 'styled-components';
import { colors, textFont, titleFont } from '../../styles/GlobalStyles';
import { ProductImg } from '../cart/styles';

const Card = styled.article`
  width: 100%;
  border: 1px solid ${colors.grayBorders};
  border-radius: 10px;
  padding-bottom: 20px;
  margin-bottom: 30px;
  & > div {
    background-color: ${colors.primaryLightColor};
    font-family: ${textFont};
    font-weight: bold;
    font-size: 1.4rem;
    padding: 0px 0;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    border-radius: 8px 8px 0 0;
    padding: 8px;
    p {
      margin: 0;
    }
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

const Item = styled.div`
  display: grid;
  justify-items: center;
  border-bottom: 1px solid ${colors.grayBorders};
  font-size: 1.3rem;
  font-family: ${textFont};
  padding: 10px 0;
  color: ${colors.primaryText};
  text-align: justify;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 20px;
    p {
      margin-bottom: 2px;
    }
  }
  div:nth-child(2) {
    p:first-child {
      font-weight: bold;
      font-family: ${titleFont};
      font-size: 1.4rem;
    }
    p:nth-child(2) {
      font-weight: bold;
      font-style: italic;
    }
  }
  div:last-child {
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  @media (min-width: 900px) {
    grid-template-columns: minmax(90px, 10%) 1fr 1fr;
    grid-template-rows: 1fr;

    div:nth-child(2) {
      align-items: flex-start;
    }
  }
`;

const ItemImg = styled(ProductImg)`
  margin: 0;
  margin-bottom: 10px;
  background-color: white;
  border: 1px solid ${colors.grayBorders};
  width: 80px;
  height: 80px;
  align-self: center;
  img {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 900px) {
    margin: 0;
  }
`;

export { Card, Item, ItemImg };
