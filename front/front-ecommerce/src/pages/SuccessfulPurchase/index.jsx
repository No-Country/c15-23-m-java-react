import React from 'react';
import { OrderSummary } from '../../components/OrderSummary';

import { Card, Content, Main, Section, Summary } from './styles';

const SuccessfulPurchase = () => {
  return (
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
                <p>Total: $47.33</p>
              </div>
              <div>
                <p>Método de pago</p>
                <p>Tarjeta de crédito</p>
              </div>
            </div>

            <div>
              <div>
                <p>Dirección de la tienda</p>
                <p>John Doe 123 Main Street City, State 12345</p>
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
  );
};

export { SuccessfulPurchase };
