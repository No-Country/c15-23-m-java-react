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

export { getProducts };
