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

export { getProducts };
