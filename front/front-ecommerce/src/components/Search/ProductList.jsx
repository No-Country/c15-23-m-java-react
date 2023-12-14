/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { StyledProductImage, StyledProductItem, StyledProductList, StyledLink } from "./styles";


const ProductList = ({ products }) => {
    return (
      <StyledProductList>
        {products.map(product => (
          < StyledProductItem key={product.id}>
             <StyledProductImage src={product.imagen} alt={product.name} />
             
             {product.name} <br /> {product.category} 

             <StyledLink href='#'><br /><br /><br />Ver más...</StyledLink>

          </StyledProductItem>
          
        ))} 
      </StyledProductList>
    )
}

export default ProductList;