import React from 'react';

const initialState = {
  user: 
    {
      id: 1,
      username: "john.doe",
      nombre: "john",
      apellido: "doe",
      password: "$2a$10$DHwOuxuWe3yOLD0OnneIiu6imxAQ7r8oWOjFNjRkapKt2fz6C3nXO",
      email: "john.doe@exacmple.com",
      dni: 37781734,
      direccion: "Angeleri",
      estado: true,
      role: null
    },
    
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

  //When the customer adds a product, the quantity of that product is 1 by default
  const addToCart = (payload) => {
    const product = { ...payload, quantity: 1 };
    setState({
      ...state,
      cart: [...state.cart, product],
    });
  };

  //Creates a new cart without the deleted product
  const removeFromCart = (payload) => {
    const newCart = state.cart.filter((product) => product.id !== payload.id);
    setState({ ...state, cart: newCart });
  };

  //Finds the product by its id and increments/decrements its quantity value
  const updateQuantity = (array, id, quantity) => {
    const product = array.find((product) => product.id === id);
    if (!(quantity > 0 && product.availableStock <= product.quantity)) {
      product.quantity += quantity;
    }
  };

  //Both update the quantity in the cart global state
  const incrementQuantity = (payload) => {
    const newCart = [...state.cart];
    updateQuantity(newCart, payload.id, 1);
    setState({ ...state, cart: newCart });
  };
  const decrementQuantity = (payload) => {
    const newCart = [...state.cart];
    updateQuantity(newCart, payload.id, -1);
    setState({ ...state, cart: newCart });
  };

  return {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    state,
  };
};

export { useInitialState };
