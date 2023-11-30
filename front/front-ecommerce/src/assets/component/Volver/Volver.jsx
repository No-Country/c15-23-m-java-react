import { ContainerVolver, Div, Button } from './styles';
import { FaArrowLeft } from "react-icons/fa";

const Volver = () => {
  return (
    <ContainerVolver>
      <Div> 
        <Button>
          <FaArrowLeft />
          <p>Volver</p>
        </Button>
      </Div>
      <Div>
        {/* aca se pasa por props el titulo de la pagina donde se esta */}
        <h2>Mi Carrito</h2>
      </Div>
    </ContainerVolver>
  )
}
 
export default Volver