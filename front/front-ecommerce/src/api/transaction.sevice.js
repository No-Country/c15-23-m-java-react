import { endPoints } from './endPoints';

const makePurchase = async (data) => {
  try {
    const response = await fetch(endPoints.transactions.url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.status === 201) {
      const transaction = await response.json();
      return transaction;
    }
  } catch (err) {
    console.error(err);
  }
};

const getPurchaseById = async (id) => {
  try {
    const res = await fetch(`${endPoints.transactions.url}/${id}`);
    if (res.status === 200) {
      const purchase = await res.json();
      return purchase;
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
  }
};

export { makePurchase, getPurchaseById };
