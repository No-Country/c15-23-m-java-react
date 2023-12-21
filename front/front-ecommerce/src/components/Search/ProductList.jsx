import { useState } from "react";
import ModalItemCard from "../Modal/Modal";
import { StyledProductImage, StyledProductItem, StyledProductList, StyledProductName } from "./styles";

const ProductList = ( filteredProducts ) => {
  const [showModal, setShowModal] = useState({});

  const handleClose = () => {
    setShowModal({});
  };

  const handleShow = (productId) => {
    setShowModal((prevShowModal) => ({
      ...prevShowModal,
      [productId]: true,
    }));
  };

  const foundProducts = filteredProducts.products;

  return (
    <StyledProductList>
      {foundProducts.map(({ name, imageLink, description, price, brand, active, category, availableStock, quantity, id }) => (
        <StyledProductItem key={id}>
          <StyledProductImage src={imageLink} alt={name} />
          <StyledProductName>
            <div><p>{name}</p></div>
            <div><p>{category}</p></div>
          </StyledProductName>
          <ModalItemCard
            key={id}
            foundProducts={foundProducts}
            handleShow={() => handleShow(id)}
            handleClose={handleClose}
            show={showModal[id] || false}
            name={name}
            imageLink={imageLink}
            description={description}
            price={price}
            brand={brand}
            active={active}
            category={category}
            availableStock={availableStock}
            quantity={quantity}
            id={id}
          ></ModalItemCard>
          <button onClick={() => handleShow(id)}>Ver más</button>
        </StyledProductItem>
      ))}
    </StyledProductList>
  );
};

export default ProductList;
