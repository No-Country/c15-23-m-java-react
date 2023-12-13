/* eslint-disable react/prop-types */
import ItemCard from "../ItemCard/ItemCard.jsx";
import {List, ListMapCard} from './styles.js'

function ListCard({products}) {
  return (
    <List>
      <ListMapCard>
        {products.map(({ titulo, imagen, descripcion, precio, autor, activo, categoria, stock, id }) => (
          <div className="listColumn" key={id}>
            <ItemCard titulo={titulo} imagen={imagen} descripcion={descripcion} precio={precio} autor={autor} activo={activo} categoria={categoria} stock={stock}/>
          </div>
        ))}
      </ListMapCard>
    </List>
  );
}

export default ListCard;