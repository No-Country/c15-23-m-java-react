import { Main, CheckoutContainer, ClientInfo, PaymentMethod } from './styles';
import { FaUser } from 'react-icons/fa';
import { OrderSummary } from '../../components/OrderSummary';
import Button from '../../assets/elementos/Boton';
import { NavLink } from 'react-router-dom';

const Checkout = () => {
  return (
    <Main>
      <CheckoutContainer>
        <h2>Verificar</h2>
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
        <NavLink to='/successfulPurchase'>Confirmar compra</NavLink>
      </CheckoutContainer>
    </Main>
  );
};

export { Checkout };
