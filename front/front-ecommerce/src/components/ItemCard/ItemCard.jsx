/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import {Card, ItemBodyCard, ItemImgCard} from './styles'
import { useState } from "react";
import ModalItemCard from "../Modal/Modal";

function ItemCard({ titulo, imagen, descripcion, precio, autor, activo, categoria, stock, id }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card>
      <ItemImgCard>
        <img src={imagen} alt="a wallpaper" className="itemImg" />
      </ItemImgCard>
      <ItemBodyCard>
        {/* <ItemTitleCard/> */}
          <h3><strong>{titulo}</strong></h3>
          <i><p className="">
            {descripcion
              ? descripcion
              : "No hay descripción del artículo"}
          </p></i>
          <ItemBodyCard>
            <div>
              <button onClick={handleShow}>Ver más</button>
            </div>
          </ItemBodyCard>
          <ModalItemCard handleShow={handleShow} handleClose={handleClose} show={show} titulo={titulo} imagen={imagen} descripcion={descripcion} precio={precio} autor={autor} activo={activo} categoria={categoria} stock={stock}></ModalItemCard>
      </ItemBodyCard>
    </Card> 
  );
}

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default ItemCard;