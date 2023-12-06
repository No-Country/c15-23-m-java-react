import { useState } from "react";
import { ProductForm } from "../../components/Product/ProductForm";
import { StyledAddEditContainer, StyledContainer, StyledTitle } from "./styles";
import BtnVolver from "../../components/BtnVolver/BtnVolver";
import { StyledLine } from "../../components/Product/styles";
import Boton from "../../assets/elementos/Boton";

export const AddEditProduct = () => {

  // Estados
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // Agregar nuevo producto
  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // Editar producto
  const handleEditProduct = (editedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product === editingProduct ? editedProduct : product))
    );
    setEditingProduct(null);
  };

  // Botón
  const handleEditButtonClick = (product) => {
    setEditingProduct(product);
  };
 
  return (
    
    <StyledAddEditContainer>
        
        <StyledContainer>
            <div><BtnVolver /></div>
          <StyledTitle>Agregar / Editar producto</StyledTitle>
        </StyledContainer>
        <StyledLine />

        <ProductForm 
            onSubmit={editingProduct ? handleEditProduct : handleAddProduct} 
            productToEdit={editingProduct} 
        />
      
        <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.category} - {product.brand} - {product.quantity} units - ${product.price}
            <Boton onClick={handleEditButtonClick(product)}>Editar</Boton>
          </li>
        ))}
      </ul>

    </StyledAddEditContainer>

  )
}