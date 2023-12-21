/* eslint-disable react/prop-types */
import ItemCard from "../ItemCard/ItemCard.jsx";
import {List, ListMapCard} from './styles.js'

function ListCard({products}) {
  return (
    
    <List>
      <ListMapCard>
        {products.map(({ name, imageLink, description, price, brand, active, category, availableStock, quantity, id }) => (
          
          <div className="listColumn" key={id}>
          
            <ItemCard key={id} products={products} name={name} imageLink={imageLink} description={description} price={price} brand={brand} active={active} category={category} availableStock={availableStock} quantity={quantity} id={id}/>
          </div>
          
        ) ) } 
      </ListMapCard>
    </List>
    
  );
}

export default ListCard;