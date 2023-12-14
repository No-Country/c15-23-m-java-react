import { Main } from './styles';
import { PastPurchase } from '../../components/PastPurchase';
import { products } from '../../components/Tables/ProductsTable';

const purchases = [
  {
    date: new Date('12-11-2023'),
    total: 140,
    products: [products[0], products[1]],
  },
  {
    date: new Date('12-1-2023'),
    total: 240,
    products: [products[1], products[2]],
  },
  {
    date: new Date('10-15-2023'),
    total: 340,
    products: [products[2], products[3]],
  },
  {
    date: new Date('08-10-2022'),
    total: 440,
    products: [products[4]],
  },
];

const PurchaseHistory = () => {
  return (
    <Main>
      <h1>Tus compras</h1>
      <section>
        <ul>
          {purchases.map((purchase, index) => (
            <li key={index}>
              <PastPurchase purchase={purchase} />
            </li>
          ))}
        </ul>
      </section>
    </Main>
  );
};

export { PurchaseHistory };
