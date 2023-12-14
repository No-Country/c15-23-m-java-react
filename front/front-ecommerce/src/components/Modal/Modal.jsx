/* eslint-disable react/prop-types */
import {ItemImgCard} from '../ItemCard/styles'
import {ContainerBodyModal, ModalBody, AddButton} from './styles';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';
// import {useInitialState} from '../../hooks/useInitialState'

function ModalItemCard({products, handleClose, show, name, imagen, description, price, brand, active, category, availableStock, id }) {

  const {
    addToCart
  } = useContext(AppContext);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Detalles</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <ItemImgCard>
              <img src={imagen}/>
          </ItemImgCard>
          <ContainerBodyModal>
            <div>
              <h2>{name}</h2>
              <p>{brand}</p>
            </div>
            <div>
              <i><p>{description}</p></i>
            </div>
            <div>
              <h2><strong>${price}</strong></h2>
              <p>Disponibilidad {availableStock} u.</p>
              <p>{category}</p>
            </div>
            <AddButton onClick={()=>addToCart(products)}>Agregar</AddButton>
          </ContainerBodyModal>
        </ModalBody>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Cerrar
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalItemCard;