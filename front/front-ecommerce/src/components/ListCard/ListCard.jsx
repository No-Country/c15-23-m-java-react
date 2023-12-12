/* eslint-disable react/prop-types */
import ItemCard from "../ItemCard/ItemCard.jsx";
import {List, ListMapCard} from './styles.js'
// import image1 from "/images/image1.jpg";
// import image2 from '/images/image2.jpg'
// import image3 from '/images/image3.jpg'
// import image4 from '/images/image4.jpg'

// const cards = [
//   {
//     id: 1,
//     title: "Producto 1",
//     image: image4,
//   },
//   {
//     id: 2,
//     title: "Producto 2",
//     image: image1,
//   },
//   {
//     id: 3,
//     title: "Producto 3",
//     image: image3,
//   },
//   {
//     id: 4,
//     title: "Producto 1",
//     image: image4,
//   },
//   {
//     id: 5,
//     title: "Producto 3",
//     image: image3,
//   },
//   {
//     id: 6,
//     title: "Producto 2",
//     image: image2,
//   },
// ];

function ListCard({products}) {
  return (
    <List>
      <ListMapCard>
        {products.map(({ titulo, imagen, descripcion, id }) => (
          <div className="listColumn" key={id}>
            <ItemCard imagen={imagen} titulo={titulo} descripcion={descripcion} />
          </div>
        ))}
      </ListMapCard>
    </List>
  );
}

export default ListCard;