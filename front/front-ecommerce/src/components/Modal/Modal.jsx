/* eslint-disable react/prop-types */
// import { useState } from 'react';
import {ItemImgCard} from '../ItemCard/styles'
// import {Quantity} from '../../components/cart/styles'
import {ContainerBodyModal, ModalBody, AddButton} from './styles';
import { MdAdd, MdRemove, MdDelete } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Quantity} from '../cart/index'
import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';



function ModalItemCard({products, handleClose, show, name, imagen, description, price, brand, active, category, availableStock, quantity, id }) {

  const {
    state: { cart },
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
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
            <AddButton>Agregar</AddButton>
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