/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import {Card, ItemBodyCard, ItemImgCard} from './styles'
import { useState } from "react";
import ModalItemCard from "../Modal/Modal";



function ItemCard({ products, name, imageLink, description, price, brand, active, category, availableStock, quantity, id }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card>
      <ItemImgCard data-tip data-for="itemTooltip">
        <img style={{width: '200px', height: '200px'}} src={imageLink} alt="a wallpaper" className="itemImg" />
      </ItemImgCard>
      <ItemBodyCard>
  
        {/* <ItemTitleCard/> */}
          <h3><strong>{brand}</strong></h3>
          <i><p className="">
            {description
              ? description
              : "No hay descripción del artículo"}
             
          </p></i>
          <ItemBodyCard>
            <div>
              <button onClick={handleShow}>Ver más</button>
            </div>
          </ItemBodyCard>
          <ModalItemCard products={products} handleShow={handleShow} handleClose={handleClose} show={show} name={name} imageLink={imageLink} description={description} price={price} brand={brand} active={active} category={category} availableStock={availableStock} quantity={quantity} id={id}></ModalItemCard>
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