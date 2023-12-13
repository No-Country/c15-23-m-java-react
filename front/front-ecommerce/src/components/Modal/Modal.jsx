/* eslint-disable react/prop-types */
// import { useState } from 'react';
import {ItemImgCard} from '../ItemCard/styles'
import {Quantity} from '../../components/cart/styles'
import {ContainerBodyModal, ModalBody, AddButton} from './styles';
import { MdAdd, MdRemove, MdDelete } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalItemCard({handleClose, show,  titulo, imagen, descripcion, precio, autor, activo, categoria, stock, id }) {

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
              <h2>{titulo}</h2>
              <p>{autor}</p>
            </div>
            <div>
              <i><p>{descripcion}</p></i>
            </div>
            <div>
              <h2><strong>${precio}</strong></h2>
              <Quantity>
                <div>
                  <button>
                    <MdRemove />
                  </button>
                  <p>2</p>
                  <button>
                    <MdAdd />
                  </button>
                </div>
                <button>
                  <MdDelete />
                </button>
              </Quantity>
              <p>Disponibilidad {stock} u.</p>
              <p>{categoria}</p>
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