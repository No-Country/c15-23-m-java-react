import { FaArrowLeft } from "react-icons/fa";
import { Button } from './styles.js';
import { useNavigate } from "react-router-dom";

const BtnVolver = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <Button onClick={goBack}>
        <FaArrowLeft />
        <p>Volver</p>
    </Button>
  )
}

export default BtnVolver




