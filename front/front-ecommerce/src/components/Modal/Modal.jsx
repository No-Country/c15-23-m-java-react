/* eslint-disable react/prop-types */
import { ItemImgCard } from '../ItemCard/styles';
import { ContainerBodyModal, ModalBody, AddButton } from './styles';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useEffect } from 'react';

function ModalItemCard({
  handleClose,
  show,
  name,
  imageLink,
  description,
  price,
  brand,
  active,
  category,
  availableStock,
  id,
}) {
  const {
    state: { cart },
    addToCart,
  } = useContext(AppContext);

  const [added, setAdded] = useState(false);

  useEffect(() => {
    const inCart = cart.find((item) => item.id === id);
    if (inCart) {
      setAdded(true);
    }
  }, [cart]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <ItemImgCard>
            <img style={{ width: '150px', height: '150px' }} src={imageLink} />
          </ItemImgCard>
          <ContainerBodyModal>
            <div>
              <h2>{brand}</h2>
              {/* <p>{brand}</p> */}
            </div>
            <div>
              <i>
                <p>{description}</p>
              </i>
            </div>
            <div>
              <h2>
                <strong>${price}</strong>
              </h2>
              <p>Disponibilidad: {availableStock} u.</p>
              <p>{category}</p>
            </div>
            <AddButton
              className={added ? 'added' : ''}
              onClick={() => {
                addToCart({
                  id,
                  name,
                  imageLink,
                  description,
                  price,
                  brand,
                  active,
                  category,
                  availableStock,
                  quantity: 1,
                });
              }}>
              {added ? 'Agregado' : 'Agregar'}
            </AddButton>
          </ContainerBodyModal>
        </ModalBody>
        <Modal.Footer>
          <AddButton variant='success' onClick={handleClose}>
            Cerrar
          </AddButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalItemCard;
