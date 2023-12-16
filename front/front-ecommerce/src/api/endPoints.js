const userService = import.meta.env.VITE_USERS_URL;
const productsService = import.meta.env.VITE_PRODUCTS_URL;

const endPoints = {
  users: {
    getUser: (id) => `${userService}/${id}`,
  },
  products: {
    getProducts: `${productsService}`,
  },
};

export { endPoints };
