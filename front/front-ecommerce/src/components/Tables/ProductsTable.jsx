import {
  Table,
  TableContainer,
  TableHead,
  TableItem,
  ImgCell,
  Edit,
  Delete,
} from './styles';

const products = [
  {
    id: 1,
    name: 'Tennis',
    img: 'https://images.unsplash.com/photo-1593081891731-fda0877988da?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Deportivos',
    price: 10.77,
    quantity: 2,
    active: true,
  },
  {
    id: 2,
    name: 'Cámara ',
    img: 'https://images.unsplash.com/photo-1586253634026-8cb574908d1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Tecnología',
    price: 10.77,
    quantity: 2,
    active: true,
  },
  {
    id: 3,
    name: 'Bota navideña',
    img: 'https://images.unsplash.com/photo-1543772857-a9d7ebc0cf63?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Accesorios',
    price: 10.77,
    quantity: 2,
    active: false,
  },
  {
    id: 4,
    name: 'Cubo Rubik',
    img: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Juguetes',
    price: 10.77,
    quantity: 2,
    active: true,
  },
  {
    id: 5,
    name: 'Bicicleta de Montaña',
    img: 'https://images.unsplash.com/photo-1575585269294-7d28dd912db8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Deportes y Recreación',
    price: 299.99,
    quantity: 3,
    active: true,
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
                  <Delete>Eliminar</Delete>
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
