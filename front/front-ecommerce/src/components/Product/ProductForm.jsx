import { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  StyledFormContainer,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledGridContainer,
  StyledColumn1,
  StyledColumn2,
  StyledImageContainer,
  StyledImageInput,
  StyledImagePreview,
  StyledGroupInput,
  StyledColumn4,
  StyledColumn3,
  StyledTextarea,
  StyledLabel,
  StyledBtnContainer,
} from "./styles";
import Boton from '../../assets/elementos/Boton';


export const ProductForm = ({ onSubmit, productToEdit }) => {

  // Estados
  const [product, setProduct] = useState(productToEdit || {
    category: '',
    brand: '',
    name: '',
    description: '',
    quantity: 0,
    price: 0,
  });

  const [selectedImages, setSelectedImages] = useState([]);

  // Manejar cambios de los datos del formunlario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  // Manejar envío
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  // Manejar cambios en los archivos (imagenes)
  const handleFileChange = (event) => {
    const files = event.target.files;

    for (const file of files) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImages((prevImages) => [...prevImages, e.target.result]);
      };

      reader.readAsDataURL(file);
    }
  };

  // Manejar la eliminación de una imagen
  const handleRemoveImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Renderizar las imagenes seleccionadas
  const renderSelectedImages = () => {
    return selectedImages.map((imageUrl, index) => (
      <div key={index} className="selected-image-container">
        <StyledImagePreview src={imageUrl} alt={`Imagen ${index + 1}`} />
        <StyledButton type="button" onClick={() => handleRemoveImage(index)}>
          Eliminar
        </StyledButton>
      </div>
    ));
  };

  return (
    <StyledFormContainer>
      <StyledGridContainer>
        <StyledColumn1>
          <StyledForm onSubmit={handleSubmit}>
            <StyledGroupInput>
              <StyledColumn3>
                <StyledLabel>Categoría</StyledLabel>
                <StyledInput type="text" name="category" value={product.category} onChange={handleChange} />
              </StyledColumn3>
              <StyledColumn4>
                 <StyledLabel>Marca</StyledLabel>
                <StyledInput type="text" name="brand" value={product.brand} onChange={handleChange} />
              </StyledColumn4>
            </StyledGroupInput>

            <StyledLabel>Nombre del Producto</StyledLabel>
            <StyledInput type="text" name="name" value={product.name} onChange={handleChange} />

            <StyledLabel>Descripción</StyledLabel>
            <StyledTextarea name="description" value={product.description} onChange={handleChange} />

            <StyledGroupInput>
              <StyledColumn3>
                 <StyledLabel>Cantidad</StyledLabel>
                 <StyledInput type="number" name="quantity" value={product.quantity} onChange={handleChange} />
              </StyledColumn3>
              <StyledColumn4>
                  <StyledLabel>Precio</StyledLabel>
                  <StyledInput type="number" name="price" value={product.price} onChange={handleChange} />
              </StyledColumn4>
            </StyledGroupInput>
          </StyledForm>
        </StyledColumn1>

        <StyledColumn2>
          Imágenes seleccionadas:
          <StyledImageContainer>
            {renderSelectedImages()}
          </StyledImageContainer>
          <StyledImageInput type="file" onChange={handleFileChange} multiple />
        </StyledColumn2>
        </StyledGridContainer>
        {/* <button type="submit">{productToEdit ? 'Edit Product' : 'Add Product'}</button> */}

        <StyledBtnContainer>
          <Boton>Publicar</Boton>
          <Boton>Descartar</Boton>
        </StyledBtnContainer>
    </StyledFormContainer>
    
  );
}

ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  productToEdit: PropTypes.object
}
