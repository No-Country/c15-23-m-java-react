import { endPoints } from './endPoints';

const getProducts = async () => {
  try {
    const prodJson = await fetch(endPoints.products.getProducts);
    if (!prodJson.ok) {
      throw new Error(`Error: ${prodJson.status} - ${prodJson.statusText}`);
    }
    const prod = await prodJson.json();
    console.log(prod)
    return prod;
  } catch (err) {
      console.error(err);
      throw err;
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
