/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { useState } from "react";
import ModalItemCard from "../Modal/Modal";
import { StyledProductImage, StyledProductItem, StyledProductList } from "./styles";


const ProductList = ({ products }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return (
      <StyledProductList>
        {products.map(products => (
          < StyledProductItem key={products.id}>
             <StyledProductImage src={products.imagen} alt={products.name} />
             
             {products.name} <br /> {products.category} 

             <button onClick={handleShow}>Ver más</button>
             <ModalItemCard products={products} handleShow={handleShow} handleClose={handleClose} show={show} name={products.name} imagen={products.imagen} description={products.description} price={products.price} brand={products.brand} active={products.active} category={products.category} availableStock={products.availableStock} quantity={products.quantity} id={products.id}></ModalItemCard>

          </StyledProductItem>
          
        ))} 
      </StyledProductList>
    )
}

export default ProductList;