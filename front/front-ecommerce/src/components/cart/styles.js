import { styled } from 'styled-components';
import { ImgCell } from '../Tables/styles';
import { colors, textFont, titleFont } from '../../styles/GlobalStyles';

const CartContainer = styled.article`
  padding: 10px 30px;
  width: 95%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (min-width: 900px) {
    width: 60%;
  }
  h2 {
    padding: 20px;
    font-size: 2.5rem;
    font-family: ${titleFont};
  }
`;

const List = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  font-family: ${textFont};
  margin-bottom: 20px;
`;

const Item = styled.div`
  padding: 10px;
  width: 100%;
  display: grid;
  justify-items: center;
  grid-gap: 15px;
  border-bottom: 1px solid ${colors.grayBorders};

  @media (min-width: 900px) {
    grid-template-columns: 2fr 1fr 1fr;
    align-items: center;
  }
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  div {
    width: 140px;
    margin-left: 20px;
    p {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    p:nth-child(2) {
      font-weight: 300;
    }
    p:first-child {
      font-weight: bold;
    }
  }
`;

const ProductImg = styled(ImgCell)`
  width: 60px;
  height: 60px;
  img {
    width: 60px;
    height: 60px;
  }
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    margin: 0 5px;
    width: 25px;
    height: 25px;
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
  }
  div {
    display: flex;
    align-items: center;
    p {
      width: 35px;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      margin: 0;
    }
  }
  & ~ p {
    font-weight: bold;
  }
`;

export { CartContainer, Item, List, Product, ProductImg, Quantity };
