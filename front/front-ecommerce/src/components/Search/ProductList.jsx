import { useState } from "react";
import ModalItemCard from "../Modal/Modal";
import { StyledProductImage, StyledProductItem, StyledProductList } from "./styles";

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
      {foundProducts.map(({ name, imagen, description, price, brand, active, category, availableStock, quantity, id }) => (
        <StyledProductItem key={id}>
          <StyledProductImage src={imagen} alt={name} />

          {name} <br /> {category}

          <ModalItemCard
            key={id}
            foundProducts={foundProducts}
            handleShow={() => handleShow(id)}
            handleClose={handleClose}
            show={showModal[id] || false}
            name={name}
            imagen={imagen}
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
