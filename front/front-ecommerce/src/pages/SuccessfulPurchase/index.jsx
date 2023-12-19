import { OrderSummary } from '../../components/OrderSummary';
import { Card, Content, Main, Section, Summary, SectionBtn } from './styles';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useEffect, useState } from 'react'
import { getUser } from '../../api/getUser'; 
import LoadingOrder from '../../components/LoadingOrder/LoadingOrder.jsx';
import { NavLink } from 'react-router-dom';

const SuccessfulPurchase = () => {
  const {
    state: { cart },
    emptyCart,
  } = useContext(AppContext);
  const totalPrice = cart.reduce((acc, el) => 
     acc + el.quantity * el.price, 0
  )
  const [user, setUser] = useState(null)
       useEffect(()=>{   
         getUser()
        .then(user => setUser(user))
        .catch(err => err)   
  }, [])

  const [loadingOrder, setLoadingOrder] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
        setLoadingOrder(false)
    }, 3000)
  },[])


  return (
    <>
     {loadingOrder ? 
      <LoadingOrder /> 
      : <>
        <Main>
        <Section>
            <Card>
              <h1>Orden realizada con éxito</h1>
              <h2>¡Gracias por comprar con nosotros!</h2>
              <p>
                Apreciamos tu compra. Para obtener tus productos debes dirigirte a
                la tienda para realizar el pago con el método que has seleccionado y
                ahí se te entregarán tus productos.
              </p>
              <Content>
                <div>
                  <div>
                    <p>Resumen de la compra</p>
                    <p>Orden número: 38380 </p>
                    <p>Fecha: 20 Diciembre 2023 </p>
                    <p>Total: $ {totalPrice}</p>
                  </div>
                  <div>
                    <p>Método de pago</p>
                    <p>Tarjeta de crédito</p>
                  </div>
                </div>

                <div>
                  <div>
                    <p>Dirección</p>
                    <p>{user && (
                        <p>{user?.direccion?.charAt(0).toUpperCase() + user?.direccion?.slice(1)}
                  </p>)}
                  </p>
                  </div>
                  <div>
                    <p>¿Alguna pregunta? </p>
                    <p>Contáctanos</p>
                    <p>Visita nuestra página de FAQ</p>
                  </div>
                </div>
              </Content>
            </Card>
          </Section>
          <Summary>
            <OrderSummary />
          </Summary>
        </Main>
        <SectionBtn>
          <NavLink to='/'><button onClick={()=>emptyCart()}>Ir al Inicio</button></NavLink>
        </SectionBtn>
      </>}
    </>
  )
};

export { SuccessfulPurchase };
