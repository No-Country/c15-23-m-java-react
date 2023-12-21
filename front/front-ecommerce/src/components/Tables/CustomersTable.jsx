import {
  Delete,
  Edit,
  Table,
  TableContainer,
  TableHead,
  TableItem,
} from './styles';
import { TiDelete } from 'react-icons/ti';
const fields = ['ID', 'Nombre', 'Apellido', 'Email', 'Estado', '', ''];

const customers = [
  {
    id: 1,
    name: 'Juan',
    lastName: 'Pérez',
    email: 'juan.perez@example.com',
    active: true,
  },
  {
    id: 2,
    name: 'María',
    lastName: 'González',
    email: 'maria.gonzalez@example.com',
    active: false,
  },
  {
    id: 3,
    name: 'Carlos',
    lastName: 'López',
    email: 'carlos.lopez@example.com',
    active: true,
  },
  {
    id: 4,
    name: 'Ana',
    lastName: 'Martínez',
    email: 'ana.martinez@example.com',
    active: false,
  },
  {
    id: 5,
    name: 'Pedro',
    lastName: 'Ramírez',
    email: 'pedro.ramirez@example.com',
    active: true,
  },
];

const CustomersTable = () => {
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
          {customers.map(({ id, name, lastName, email, active }) => (
            <TableItem key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td className={active ? 'available' : 'not-available'}>
                {active ? 'Activo' : 'Inactivo'}
              </td>
              <td>
                <Edit href='#'>Editar</Edit>
              </td>
              <td>
                <Delete>
                  <TiDelete />
                </Delete>
              </td>
            </TableItem>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export { CustomersTable };
