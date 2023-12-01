import { ContainerVolver, DivVolver, DivTitulo, Button } from './styles';
import { FaArrowLeft } from "react-icons/fa";

const Volver = () => {
  return (
    <ContainerVolver>
      <DivVolver> 
        <Button>
          <FaArrowLeft />
          <p>Volver</p>
        </Button>
      </DivVolver>
      <DivTitulo>
        {/* aca se pasa por props el titulo de la pagina donde se esta */}
        <h2>Mi Carrito</h2>
      </DivTitulo>
    </ContainerVolver>
  )
}
 
export default Volver