import {
  CartContainer,
  List,
  Item,
  Product,
  ProductImg,
  Quantity,
} from './styles';
import { MdAdd, MdRemove, MdDelete } from 'react-icons/md';
import { products } from '../Tables/ProductsTable';
import Button from '../../assets/elementos/Boton';

const Cart = () => {
  return (
    <CartContainer>
      <h2>Mi orden</h2>
      <List>
        {products.map(({ id, name, category, price, img }) => (
          <li key={id}>
            <Item>
              <Product>
                <ProductImg>
                  <img src={img} alt='product image' />
                </ProductImg>
                <div>
                  <p>{name}</p>
                  <p>{category}</p>
                </div>
              </Product>
              <Quantity>
                <div>
                  <button>
                    <MdRemove />
                  </button>
                  <p>2</p>
                  <button>
                    <MdAdd />
                  </button>
                </div>
                <button>
                  <MdDelete />
                </button>
              </Quantity>
              <p>$20.00</p>
            </Item>
          </li>
        ))}
      </List>
      <Button>Checkout</Button>
    </CartContainer>
  );
};

export { Cart };
