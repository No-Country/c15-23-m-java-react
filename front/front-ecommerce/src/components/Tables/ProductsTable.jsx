import {
  Table,
  TableContainer,
  TableHead,
  TableItem,
  ImgCell,
  Edit,
  Delete,
} from './styles';
import { TiDelete } from 'react-icons/ti';
export const products = [
  {
    id: 1,
    name: 'Tennis',
    img: 'https://images.unsplash.com/photo-1593081891731-fda0877988da?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Deportivos',
    price: 10.77,
    quantity: 2,
    active: true,
    description: 'Comfortable and stylish Nike sports shoes.',
  },
  {
    id: 2,
    name: 'Cámara ',
    img: 'https://images.unsplash.com/photo-1586253634026-8cb574908d1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Tecnología',
    price: 10.77,
    quantity: 2,
    active: true,
    description: 'High-quality camera for capturing memorable moments.',
  },
  {
    id: 3,
    name: 'Bota navideña',
    img: 'https://images.unsplash.com/photo-1543772857-a9d7ebc0cf63?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Accesorios',
    price: 10.77,
    quantity: 2,
    active: false,
    description: 'Festive red holiday boot for a touch of Christmas spirit.',
  },
  {
    id: 4,
    name: 'Cubo Rubik',
    img: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Juguetes',
    price: 10.77,
    quantity: 2,
    active: true,
    description: "Classic Rubik's Cube for hours of puzzle-solving fun.",
  },
  {
    id: 5,
    name: 'Bicicleta de Montaña',
    img: 'https://images.unsplash.com/photo-1575585269294-7d28dd912db8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Deportes y Recreación',
    price: 299.99,
    quantity: 3,
    active: true,
    description:
      'Experience the thrill of off-road exploration with our cutting-edge mountain bike. Designed for exceptional performance on rugged trails and winding paths, this bike combines durability, comfort, and advanced technology.',
  },
];

const fields = [
  'id',
  'Producto',
  'Categoría',
  'Cantidad',
  'Estado',
  'Precio',
  '',
  '',
];

const ProductsTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <tr>
            {fields.map((field, index) => (
              <th key={index}>{field}</th>
            ))}
          </tr>
        </TableHead>
        <tbody>
          {products.map(
            ({ id, name, img, category, quantity, active, price }) => (
              <TableItem key={id}>
                <td>{id}</td>
                <td>
                  <div>
                    <ImgCell>
                      <img alt='producto' src={img}></img>
                    </ImgCell>
                    <p>{name}</p>
                  </div>
                </td>
                <td>{category}</td>
                <td>{quantity}</td>
                <td className={active ? 'available' : 'not-available'}>
                  {active ? 'Disponible' : 'Agotado'}
                </td>
                <td>${price}</td>
                <td>
                  <Edit href='#'>Editar</Edit>
                </td>
                <td>
                  <Delete>
                    <TiDelete />
                  </Delete>
                </td>
              </TableItem>
            )
          )}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export { ProductsTable };
