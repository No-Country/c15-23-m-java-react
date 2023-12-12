/* eslint-disable react/prop-types */
// import { useState } from 'react';
import {ItemImgCard} from '../ItemCard/styles'
import {Quantity} from '../../components/cart/styles'
import {ContainerBodyModal, ModalBody, AddButton} from './styles';
import { MdAdd, MdRemove, MdDelete } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalItemCard({handleClose, show, imageSource, title, text}) {

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
              <img src={imageSource}/>
          </ItemImgCard>
          <ContainerBodyModal>
            <div>
              <h3>{title}</h3>
              <p>Marca</p>
            </div>
            <div>
              <i><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum totam beatae quod expedita inventore</p></i>
            </div>
            <div>
              <div>
                <strong>Precio</strong>
                {/* poner el descuento */}
                <i> (Desc)</i>
              </div>
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
              <p>Stock</p>
              <p>Categoria</p>
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