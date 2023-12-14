import { Main, CheckoutContainer, ClientInfo, PaymentMethod } from './styles';
import { FaUser } from 'react-icons/fa';
import { OrderSummary } from '../../components/OrderSummary';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getUser } from '../../api/getUser'; 

const Checkout = () => {
    const [user, setUser] = useState(null) 
       useEffect(()=>{   
         getUser()
        .then(user => setUser(user))
        .catch(err => err)   
  }, [])
  return (
    <Main>
      <CheckoutContainer>
        <h2>Verificar</h2>
        <ClientInfo>
          <FaUser />
          {user && (
          <p>{user?.nombre?.charAt(0).toUpperCase() + user?.nombre?.slice(1)} {''} 
             {user?.apellido?.charAt(0).toUpperCase() + user?.apellido?.slice(1)} 
          </p>      
         )}
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
