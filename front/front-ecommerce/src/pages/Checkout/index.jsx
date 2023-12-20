import { Main, CheckoutContainer, ClientInfo, PaymentMethod } from './styles';
import { FaUser } from 'react-icons/fa';
import { OrderSummary } from '../../components/OrderSummary';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getUser } from '../../api/getUser'; 
import Volver from '../../components/Volver/Volver';

const Checkout = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null);
    const [topping, setTopping] = useState("Efectivo")
    const onOptionChange = e => {
      console.log(e.target.value)
      setTopping(e.target.value)
    } 
    useEffect(()=>{
      const fetchData = async () => {
        try {
          const user = await getUser();
          setUser(user);
        } catch (err) {
          console.error(err);
          setError('No se encuentra usuario');
        }
      };
      fetchData();  
    }, [])
  return (
    <Main>
      <Volver titulo="Resumen"/>
      <CheckoutContainer>
        <h2>Verificar</h2>
        <ClientInfo>
          <FaUser />
          {error ? (<p>{error}</p>) :
         (user && (
           <a>
            {user?.nombre?.charAt(0).toUpperCase() + user?.nombre?.slice(1)} {''} 
            {user?.apellido?.charAt(0).toUpperCase() + user?.apellido?.slice(1)} 
          </a>      
         ))}
        </ClientInfo>
        <OrderSummary />
        <PaymentMethod>
          <h3>Opciones de pago</h3>
          <div>
            <label>
              <input type='radio' value='Efectivo' name="topping" id="efectivo" checked={topping === "Efectivo"} onChange={onOptionChange} />
              Efectivo
            </label>
            <label>
              <input type='radio' value='Crédito' name="topping" id="credito" checked={topping === "Crédito"} onChange={onOptionChange} />
              Tarjeta de crédito
            </label>
            <label>
              <input type='radio' value='Débito' name="topping" id="debito" checked={topping === "Débito"} onChange={onOptionChange} />
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
