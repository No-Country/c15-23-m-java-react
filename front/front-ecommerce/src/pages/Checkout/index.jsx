import React from 'react';
import {
  Main,
  CheckoutContainer,
  ClientInfo,
  ConfirmationButton,
  PaymentMethod,
} from './styles';
import { FaUser } from 'react-icons/fa';
import { OrderSummary } from '../../components/OrderSummary';

const Checkout = () => {
  return (
    <Main>
      <CheckoutContainer>
        <h2>Checkout</h2>
        <ClientInfo>
          <FaUser />
          <p>Nombre del Usuario Cliente</p>
        </ClientInfo>
        <OrderSummary />
        <PaymentMethod>
          <h3>Opciones de pago</h3>
          <div>
            <label>
              <input type='radio' value='Efectivo' />
              Efectivo
            </label>
            <label>
              <input type='radio' value='Crédito' />
              Tarjeta de crédito
            </label>
            <label>
              <input type='radio' value='Débito' />
              Tarjeta de débito
            </label>
          </div>
        </PaymentMethod>
        <ConfirmationButton>Realizar pedido</ConfirmationButton>
      </CheckoutContainer>
    </Main>
  );
};

export { Checkout };
