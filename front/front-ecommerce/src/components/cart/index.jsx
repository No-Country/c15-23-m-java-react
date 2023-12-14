import {
  CartContainer,
  List,
  Item,
  Product,
  ProductImg,
  Quantity,
  EmptyCart,
} from './styles';
import emptyCartImg from '../../../public/img/Add-to-Cart.svg';
import { useContext } from 'react';
import { MdAdd, MdRemove, MdDelete } from 'react-icons/md';
import Button from '../../assets/elementos/Boton';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Cart = () => {
  const {
    state: { cart },
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useContext(AppContext);

  return (
    <CartContainer>
      <h2>Mi orden</h2>

      {!cart.length && (
        <EmptyCart>
          <figure>
            <img alt='empty cart image' src={emptyCartImg} />
          </figure>
          <p>Tu carrito está vacío, llénalo de productos 😁 .</p>
        </EmptyCart>
      )}

      {!!cart.length && (
        <>
          <List>
            {cart.map((product) => (
              <li key={product.id}>
                <Item>
                  <Product>
                    <ProductImg>
                      <img src={product.img} alt='product image' />
                    </ProductImg>
                    <div>
                      <p>
                        {product.name}, {product.brand}
                      </p>
                      <p>{product.category}</p>
                      <p>
                        Disponibles: {product.availableStock - product.quantity}
                      </p>
                    </div>
                  </Product>
                  <Quantity>
                    <div>
                      <button
                        onClick={() => decrementQuantity(product)}
                        disabled={product.quantity < 2}>
                        <MdRemove />
                      </button>
                      <p>{product.quantity}</p>
                      <button
                        onClick={() => incrementQuantity(product)}
                        disabled={product.quantity >= product.availableStock}>
                        <MdAdd />
                      </button>
                    </div>
                    <button>
                      <MdDelete onClick={() => removeFromCart(product)} />
                    </button>
                  </Quantity>
                  <p>${product.price * product.quantity}</p>
                </Item>
              </li>
            ))}
          </List>
          <NavLink to='/checkout'>
            <Button>Comprar ahora</Button>
          </NavLink>
        </>
      )}
    </CartContainer>
  );
};

export { Cart, Quantity };
