import { styled } from 'styled-components';
import { titleFont, textFont, colors } from '../../styles/GlobalStyles';

const OrderSummaryCard = styled.article`
  width: 100%;
  height: auto;
  padding: 20px;
  border-radius: 15px;
  background-color: ${colors.primaryColor};
  color: ${colors.primaryText};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  h3 {
    text-align: center;
    font-size: 2rem;
    font-family: ${titleFont};
    margin-bottom: 20px;
    font-weight: bold;
  }
`;
const SummaryList = styled.div`
  height: auto;
  div:last-child {
    border-bottom: 1px solid white;
  }
`;

const ProductImage = styled.figure`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    object-fit: contain;
    filter: brightness(1.1);
    mix-blend-mode: multiply;
  }
`;

const SummaryItem = styled.div`
  width: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  font-family: ${textFont};
  border-top: 1px solid white;

  div {
    width: 40%;
    font-family: ${textFont};
    p:first-child {
      font-weight: bold;
    }
    p {
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const OrderTotal = styled.article`
  font-family: ${textFont};
  width: 100%;
  margin-top: 10px;
  div {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    p:first-child {
      font-weight: bold;
    }
  }
  div:first-child {
    padding-top: 20px;
    border-top: 2px solid white;
  }
  div:nth-child(2) {
    border-bottom: 1px solid white;
    padding-bottom: 8px;
  }
  div:last-child {
    font-size: 1.6rem;
    margin-top: 5px;
    font-weight: bold;
  }
`;

export { OrderSummaryCard, OrderTotal, SummaryItem, SummaryList, ProductImage };
