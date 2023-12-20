import { OrderSummary } from '../../components/OrderSummary';
import Loader from '../../components/LoadingOrder/LoadingOrder.jsx';

import { Card, Content, Main, Section, Summary } from './styles';
import { useContext, useEffect, useState } from 'react';
import { useLocation, Navigate, NavLink } from 'react-router-dom';
import { getPurchaseById } from '../../api/transaction.sevice';
import { getProductById } from '../../api/getProducts';
import { AppContext } from '../../context/AppContext';

import { SectionBtn } from './styles';

const SuccessfulPurchase = () => {
  const location = useLocation();
  const [purchase, setPurchase] = useState({});
  const [loadingOrder, setLoadingOrder] = useState(false);

  const { emptyCart } = useContext(AppContext);

  const getPurchaseInfo = async () => {
    setLoadingOrder(true);
    const id = location.pathname.slice(20);
    const data = await getPurchaseById(id);
    if (data === null) {
      setPurchase(data);
      return;
    }
    const products = await Promise.all(
      data.items.map(async (item) => {
        const product = await getProductById(item.productId);
        return { ...product, quantity: item.quantity };
      })
    );
    data.items = products;
    setPurchase(data);
    setLoadingOrder(false);
  };

  useEffect(() => {
    getPurchaseInfo();
  }, []);

  if (purchase === null) {
    return <Navigate to='/notFound' />;
  }
  return (
    <>
      {loadingOrder ? (
        <Loader />
      ) : (
        <>
          <Main>
            <Section>
              <Card>
                <h1>Orden realizada con éxito</h1>
                <h2>¡Gracias por comprar con nosotros!</h2>
                <p>
                  Apreciamos tu compra. Para obtener tus productos debes
                  dirigirte a la tienda para realizar el pago con el método que
                  has seleccionado y ahí se te entregarán tus productos.
                </p>
                <Content>
                  <div>
                    <div>
                      <p>Resumen de la compra</p>
                      <p>Orden número: {purchase?.id}</p>
                      <p>Fecha: {new Date().toLocaleDateString()} </p>
                      <p>Total: $ {purchase?.montoTotal}</p>
                    </div>
                    <div>
                      <p>Datos del cliente</p>
                      <p>{purchase?.userUsername}</p>
                      <p>{purchase?.userEmail}</p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <p>Dirección de la tienda</p>
                      <p>16 Oak Street, Springfield, IL 62704</p>
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
              <OrderSummary
                cart={purchase?.items || []}
                total={purchase?.montoTotal - purchase?.impuestos || 0}
              />
            </Summary>
          </Main>

          <SectionBtn>
            <NavLink to='/'>
              <button onClick={() => emptyCart()}>Ir al Inicio</button>
            </NavLink>
          </SectionBtn>
        </>
      )}
    </>
  );
};

export { SuccessfulPurchase };
