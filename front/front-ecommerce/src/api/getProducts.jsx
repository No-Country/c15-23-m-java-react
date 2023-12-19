import { endPoints } from './endPoints';

const getProducts = async () => {
  try {
    const prodJson = await fetch(endPoints.products.getProducts);
    const prod = await prodJson.json();
    return prod;
  } catch (err) {
    console.log(err);
  }
};

const getProductById = async (id) => {
  try {
    const res = await fetch(endPoints.products.getProduct(id));
    if (res.status === 200) {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    console.error(err);
  }
};

export { getProducts, getProductById };
