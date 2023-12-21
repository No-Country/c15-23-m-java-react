import { Main, CheckoutContainer, ClientInfo, PaymentMethod } from './styles';
import Button from '../../assets/elementos/Boton';
import { FaUser } from 'react-icons/fa';
import { OrderSummary } from '../../components/OrderSummary';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import Loader from '../../components/Loading/Loading';
import Volver from '../../components/Volver/Volver';
import { AppContext } from '../../context/AppContext';
import { makePurchase } from '../../api/transaction.sevice';

const Checkout = () => {
  const {
    state: { cart, user },
    emptyCart,
  } = useContext(AppContext);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [topping, setTopping] = useState('Efectivo');

  const total = cart.reduce((acc, el) => acc + el.quantity * el.price, 0);

  const onOptionChange = (e) => {
    setTopping(e.target.value);
  };

  const parseData = () => {
    const items = cart.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    }));
    return {
      userDto: {
        userId: user.id,
        username: user.username,
        email: user.email,
      },
      itemDtos: items,
      impuestos: total * 0.12,
      montoTotal: total + total * 0.12,
      montoDescontado: 0,
    };
  };

  const handlePurchase = async () => {
    const data = parseData();
    try {
      setLoading(true);
      const { id } = await makePurchase(data);
      setLoading(false);
      emptyCart();
      navigate(`/successfulPurchase/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  if (!cart.length) {
    return <Navigate to='/shop' />;
  }

  return (
    <>
      <Main>
        <Volver titulo='Resumen' />
        <CheckoutContainer>
          <h2>Verificar</h2>
          <ClientInfo>
            <FaUser />
            {user && (
              <p>
                {user?.nombre?.charAt(0).toUpperCase() + user?.nombre?.slice(1)}{' '}
                {''}
                {user?.apellido?.charAt(0).toUpperCase() +
                  user?.apellido?.slice(1)}
              </p>
            )}
          </ClientInfo>
          <OrderSummary cart={cart} total={total} />
          <PaymentMethod>
            <h3>Opciones de pago</h3>
            <div>
              <label>
                <input
                  type='radio'
                  value='Efectivo'
                  name='topping'
                  id='efectivo'
                  checked={topping === 'Efectivo'}
                  onChange={onOptionChange}
                />
                Efectivo
              </label>
              <label>
                <input
                  type='radio'
                  value='Crédito'
                  name='topping'
                  id='credito'
                  checked={topping === 'Crédito'}
                  onChange={onOptionChange}
                />
                Tarjeta de crédito
              </label>
              <label>
                <input
                  type='radio'
                  value='Débito'
                  name='topping'
                  id='debito'
                  checked={topping === 'Débito'}
                  onChange={onOptionChange}
                />
                Tarjeta de débito
              </label>
            </div>
          </PaymentMethod>
          <Button onClick={handlePurchase}>Confirmar compra</Button>
        </CheckoutContainer>
        {loading && <Loader />}
      </Main>
    </>
  );
};

export { Checkout };
