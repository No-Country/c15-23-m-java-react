import { Cart } from '../../components/Cart';
import Volver from '../../components/Volver/Volver';
import { Main } from './styles';

const ShoppingCart = () => {
  return (
    <Main>
      <Volver titulo="Mi Carrito"/>
      <Cart />
    </Main>
  );
};

export { ShoppingCart };
