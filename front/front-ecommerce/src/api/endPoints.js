const userService = import.meta.env.VITE_USERS_URL;
const productsService = import.meta.env.VITE_PRODUCTS_URL;
const transactionsService = import.meta.env.VITE_TRANSACTIONS_URL;

const endPoints = {
  users: {
    getUser: (id) => `${userService}/${id}`,
  },
  products: {
    getProducts: `${productsService}/all`,
    getProduct: (id) => `${productsService}/${id}`,
  },
  transactions: {
    url: transactionsService,
  },
};

export { endPoints };
