import {
  OrderSummaryCard,
  OrderTotal,
  SummaryItem,
  SummaryList,
} from './styles';

const products = [
  {
    name: 'Tennis',
    img: 'https://images.unsplash.com/photo-1593081891731-fda0877988da?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Nike, Deportivos',
    price: 10.77,
    quantity: 2,
  },
  {
    name: 'Cámara ',
    img: 'https://images.unsplash.com/photo-1586253634026-8cb574908d1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Tecnología, Gris',
    price: 10.77,
    quantity: 2,
  },
  {
    name: 'Bota navideña',
    img: 'https://images.unsplash.com/photo-1543772857-a9d7ebc0cf63?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Accesorios, Color rojo',
    price: 10.77,
    quantity: 2,
  },
  {
    name: 'Cubo Rubik',
    img: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Juguetes',
    price: 10.77,
    quantity: 2,
  },
];

const OrderSummary = () => {
  return (
    <OrderSummaryCard>
      <h3>Resumen de la compra</h3>
      <SummaryList>
        {products.map(({ name, img, category, quantity, price }) => (
          <SummaryItem>
            <figure>
              <img alt='product image' src={img} />
            </figure>
            <div>
              <p>{name}</p>
              <p>{category}</p>
            </div>
            <p>{quantity}</p>
            <p>$ {price}</p>
          </SummaryItem>
        ))}
      </SummaryList>
      <OrderTotal>
        <div>
          <p>Subtotal:</p> <p>$35.17</p>
        </div>
        <div>
          <p>Impuestos:</p> <p>$3.24</p>
        </div>
        <div>
          <p>Total:</p> <p>$38.41</p>
        </div>
      </OrderTotal>
    </OrderSummaryCard>
  );
};

export { OrderSummary };
