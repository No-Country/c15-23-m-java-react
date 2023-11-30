import styled from 'styled-components';
import { textFont, titleFont } from '../../styles/GlobalStyles';

const CheckoutContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2.4rem;
    font-family: ${titleFont};
    margin-bottom: 20px;
    color: #29b081;
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
  }
`;

const PaymentMethod = styled.div`
  margin-top: 20px;
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

const ConfirmationButton = styled.button`
  width: 80%;
  height: 45px;
  font-size: 1.8rem;
  font-family: ${textFont};
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
  border: none;
  color: white;
  background-color: #56c9a0;
  &:hover {
    background-color: #29b081;
  }
`;

const Main = styled.main`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

export {
  CheckoutContainer,
  ClientInfo,
  ConfirmationButton,
  Main,
  PaymentMethod,
};
