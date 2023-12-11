import { Card, Item, ItemImg } from './styles';

const PastPurchase = ({ purchase: { date, total, products } }) => {
  return (
    <Card>
      <div>
        <p>{date.toDateString()}</p> <p>Total: ${total}</p>
      </div>
      <ul>
        {products.map(
          ({ id, name, img, category, description, quantity, price }) => (
            <li key={id}>
              <Item>
                <ItemImg>
                  <img alt='imagen' src={img} />
                </ItemImg>

                <div>
                  <p>{name}</p>
                  <p>{category}</p>
                  <p>{description}</p>
                </div>
                <div>
                  <p>Cantidad: {quantity}</p>
                  <p>Precio unitario: ${price}</p>
                  <p>Total: ${price * quantity}</p>
                </div>
              </Item>
            </li>
          )
        )}
      </ul>
    </Card>
  );
};

export { PastPurchase };
