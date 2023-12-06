import { Cart } from '../../components/cart';
import Volver from '../../components/Volver/Volver';
import { Main } from './styles';

const ShoppingCart = () => {
  return (
    <Main>
      <Volver />
      <Cart />
    </Main>
  );
};

export { ShoppingCart };
