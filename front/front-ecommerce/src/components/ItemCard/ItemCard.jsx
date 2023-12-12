/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import {Card, ItemBodyCard, ItemTitleCard, ItemImgCard} from './styles'
import { useState } from "react";
import ModalItemCard from "../Modal/Modal";

function ItemCard({ imagen, titulo, descripcion }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card>
      <ItemImgCard>
        <img src={imagen} alt="a wallpaper" className="itemImg" />
      </ItemImgCard>
      <ItemBodyCard>
        <ItemTitleCard/>
        <p><strong>{titulo}</strong></p>
        <p className="">
          {descripcion
            ? descripcion
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga ."}
        </p>
        <div>
          <button onClick={handleShow}>Ver más</button>
        </div>
          <ModalItemCard handleShow={handleShow} handleClose={handleClose} show={show} imagen={imagen} titulo={titulo} descripcion={descripcion}></ModalItemCard>
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