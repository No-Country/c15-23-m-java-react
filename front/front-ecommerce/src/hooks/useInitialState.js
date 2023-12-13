import React from 'react';

const initialState = {
  user: {},
  cart: [
    {
      id: 1,
      name: 'Tennis',
      brand: 'Nike',
      descripcion: 'Zapatillas deportivas Nike cómodas y elegantes.',
      price: 2300.35,
      availableStock: 2,
      active: true,
      discount: 0,
      category: 'Nike, Deportivos',
      height: 10,
      width: 7,
      img: 'https://images.unsplash.com/photo-1593081891731-fda0877988da?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Cámara',
      brand: 'Canon',
      descripcion:
        'Cámara de alta calidad para capturar momentos inolvidables.',
      price: 5739,
      availableStock: 4,
      active: true,
      discount: 0,
      category: 'Tecnología, Gris',
      height: 10,
      width: 7,
      img: 'https://images.unsplash.com/photo-1586253634026-8cb574908d1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Bota navideña',
      brand: 'MarcaXYZ',
      descripcion: 'Bota festiva roja para dar un toque de espíritu navideño.',
      price: 120,
      availableStock: 2,
      active: true,
      discount: 0,
      category: 'Accesorios, Color rojo',
      height: 10,
      width: 7,
      img: 'https://images.unsplash.com/photo-1543772857-a9d7ebc0cf63?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quantity: 1,
    },
    {
      id: 4,
      name: 'Cubo Rubik',
      brand: 'MarcaABC',
      descripcion:
        'Cubo Rubik clásico para horas de diversión resolviendo rompecabezas.',
      price: 250,
      availableStock: 2,
      active: true,
      discount: 0,
      category: 'Juguetes',
      height: 10,
      width: 7,
      img: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quantity: 1,
    },
  ],
};

const useInitialState = () => {
  const [state, setState] = React.useState(initialState);

  //Al agregar un producto, la cantidad de ese producto en el cart es 1
  const addToCart = (payload) => {
    const product = { ...payload, quantity: 1 };
    setState({
      ...state,
      cart: [...state.cart, product],
    });
  };

  //Se crea un nuevo cart sin el producto que se eliminó.
  const removeFromCart = (payload) => {
    const newCart = state.cart.filter((product) => product.id !== payload.id);
    setState({ ...state, cart: newCart });
  };

  const incrementQuantity = (payload) => {
    const newCart = [...state.cart];
    const product = newCart.find((product) => product.id === payload.id);
    product.quantity = product.quantity + 1;
    setState({ ...state, cart: newCart });
  };

  return { addToCart, removeFromCart, incrementQuantity, state };
};

export { useInitialState };
