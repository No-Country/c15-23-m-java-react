/* eslint-disable react/prop-types */
import ItemCard from "../ItemCard/ItemCard.jsx";
import {List, ListMapCard} from './styles.js'

function ListCard({products}) {
  return (
    <List>
      <ListMapCard>
        {products.map(({ name, imagen, description, price, brand, active, category, availableStock, quantity, id }) => (
          <div className="listColumn" key={id}>
            <ItemCard key={id} products={products} name={name} imagen={imagen} description={description} price={price} brand={brand} active={active} category={category} availableStock={availableStock} quantity={quantity}/>
          </div>
        ))}
      </ListMapCard>
    </List>
  );
}

export default ListCard;