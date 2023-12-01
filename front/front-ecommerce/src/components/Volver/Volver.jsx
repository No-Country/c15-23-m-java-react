import BtnVolver from '../BtnVolver/BtnVolver.jsx';
import { ContainerVolver, DivVolver, DivTitulo } from './styles';

const Volver = () => {
  return (
    <ContainerVolver>
      <DivVolver> 
        <BtnVolver />
      </DivVolver>
      <DivTitulo>
        {/* aca se pasa por props el titulo de la pagina donde se esta */}
        <h2>Mi Carrito</h2>
      </DivTitulo>
    </ContainerVolver>
  )
}
 
export default Volver