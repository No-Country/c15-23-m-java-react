import React from 'react';
import Swal from 'sweetalert2';
import { getUser } from '../api/getUser';

const initialState = {
  user: null,
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = React.useState(initialState);

  //When the customer adds a product, the quantity of that product is 1 by default
  const addToCart = (payload) => {
    const existingProductIndex = state.cart.findIndex(
      (product) => product.id === payload.id
    );

    if (existingProductIndex !== -1) {
      // El producto ya está en el carrito, incrementa la cantidad
      const newCart = [...state.cart];
      setState({
        ...state,
        cart: newCart,
      });
      Swal.fire({
        title: 'Ya esta agregado al carrito!',
        icon: 'info',
        position: 'center',
        toast: true,
        showConfirmButton: false,
        timer: 2000,
        heightAuto: false,
        padding: '50px 50px',
      });
    } else {
      // El producto no está en el carrito, agrégalo con cantidad 1
      const products = { ...payload, quantity: 1 };
      setState({
        ...state,
        cart: [...state.cart, products],
      });
      Swal.fire({
        title: 'Producto agregado!',
        icon: 'success',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  //Creates a new cart without the deleted product
  const removeFromCart = (payload) => {
    const newCart = state.cart.filter((product) => product.id !== payload.id);
    Swal.fire({
      text: `Esta seguro que quiere eliminarlo del carrito?`,
      icon: 'question',
      confirmButtonText: 'Si',
      confirmButtonColor: 'rgba(86, 201, 160, 1)',
    }).then((result) => {
      if (result.isConfirmed) {
        setState({ ...state, cart: newCart });
        Swal.fire({
          title: 'Eliminado del carrito!',
          icon: 'success',
          position: 'top-end',
          toast: true,
          showConfirmButton: false,
          timer: 1700,
        });
      }
    });
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

  const emptyCart = () => {
    setState({ ...state, cart: [] });
  };

  //The request for the user data is made only once
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUser();
        setState({ ...state, user });
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    state,
    emptyCart,
  };
};

export { useInitialState };
