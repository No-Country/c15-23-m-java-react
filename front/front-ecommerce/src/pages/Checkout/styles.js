import styled from 'styled-components';
import { colors, textFont, titleFont } from '../../styles/GlobalStyles';

const CheckoutContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  
  h2 {
    font-size: 2.5rem;
    font-family: ${titleFont};
    font-weight: bold;
    margin-bottom: 20px;
    color: black;
  }
  a {
    width: 100%;
    background-color: ${colors.primaryColor};
    color: white;
    border-radius: 10px;
    font-family: ${textFont};
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    &:hover {
      background-color: ${colors.buttonHover};
    }
  }

  @media (min-width: 900px) {
    width: 50%;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
const ClientInfo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-top: 1px solid #c8c8c8;
  border-bottom: 1px solid #c8c8c8;
  margin-bottom: 20px;
  svg {
    font-size: 1.4rem;
  }
  p {
    font-family: ${textFont};
    font-size: 1.4rem;
    margin-left: 10px;
    margin-bottom: 0;
  }
`;

const PaymentMethod = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid #c8c8c8;
  border-bottom: 1px solid #c8c8c8;
  font-family: ${textFont};
  h3 {
    font-size: 1.6rem;
    font-family: ${titleFont};
    margin-bottom: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    label {
      cursor: pointer;
      input[type='radio'] {
        margin-right: 5px;
      }
    }
  }
`;

const Main = styled.main`
 padding: 40px 0 40px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export { CheckoutContainer, ClientInfo, Main, PaymentMethod };
