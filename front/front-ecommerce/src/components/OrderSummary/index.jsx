import React from 'react';

import {
  OrderSummaryCard,
  OrderTotal,
  ProductImage,
  SummaryItem,
  SummaryList,
} from './styles';

const OrderSummary = ({ cart, total }) => {
  return (
    <OrderSummaryCard>
      <h3>Resumen de la compra</h3>
      <SummaryList>
        {cart.map((product) => (
          <SummaryItem key={product.id}>
            <ProductImage>
              <img alt='product image' src={product?.imageLink} />
            </ProductImage>
            <div>
              <p>{product.name}</p>
              <p>{product.category}</p>
            </div>
            <p>{product.quantity}</p>
            <p>$ {product.price * product.quantity}</p>
          </SummaryItem>
        ))}
      </SummaryList>

      <OrderTotal>
        <div>
          <p>Subtotal:</p>
          <p>{total}</p>
        </div>
        <div>
          <p>Impuestos:</p>
          <p>{total * 0.12}</p>
        </div>
        <div>
          <p>Total:</p>
          <p>$ {total + total * 0.12}</p>
        </div>
      </OrderTotal>
    </OrderSummaryCard>
  );
};

export { OrderSummary };
