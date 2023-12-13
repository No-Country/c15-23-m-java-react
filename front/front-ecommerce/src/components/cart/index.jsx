import {
  CartContainer,
  List,
  Item,
  Product,
  ProductImg,
  Quantity,
} from './styles';
import { useEffect, useState } from 'react';
import { MdAdd, MdRemove, MdDelete } from 'react-icons/md';
import Button from '../../assets/elementos/Boton';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Cart = () => {
  const {
    state: { cart },
    incrementQuantity,
    removeFromCart,
  } = useContext(AppContext);

  return (
    <CartContainer>
      <h2>Mi orden</h2>
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
                </div>
              </Product>
              <Quantity>
                <div>
                  <button>
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
              <p>${product.price}</p>
            </Item>
          </li>
        ))}
      </List>
      <NavLink to='/checkout'>
        <Button>Verificar</Button>
      </NavLink>
    </CartContainer>
  );
};

export { Cart };
