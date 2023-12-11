import PropTypes from "prop-types";
import {Card, ItemBodyCard, ItemTitleCard, ItemImgCard} from './styles'
import { useState } from "react";
import ModalItemCard from "../Modal/Modal";

function ItemCard({ imageSource, title, text }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card>
      <ItemImgCard>
        <img src={imageSource} alt="a wallpaper" className="itemImg" />
      </ItemImgCard>
      <ItemBodyCard>
        <ItemTitleCard/>
        <p><strong>{title}</strong></p>
        <p className="">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga ."}
        </p>
        <div>
          <button onClick={handleShow}>Ver más</button>
        </div>
          <ModalItemCard handleShow={handleShow} handleClose={handleClose} show={show} imageSource={imageSource} title={title} text={text}></ModalItemCard>
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