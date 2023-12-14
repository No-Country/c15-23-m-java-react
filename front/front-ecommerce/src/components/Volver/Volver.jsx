import BtnVolver from '../BtnVolver/BtnVolver.jsx';
import { ContainerVolver, DivVolver, DivTitulo } from './styles';

const Volver = ({titulo}) => {
  return (
    <ContainerVolver>
      <DivVolver> 
        <BtnVolver />
      </DivVolver>
      <DivTitulo>
        <h2>{titulo}</h2>
      </DivTitulo>
    </ContainerVolver>
  )
}
 
export default Volver