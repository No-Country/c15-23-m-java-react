import { ProductsTable } from '../../components/Tables/ProductsTable';
import { CustomersTable } from '../../components/Tables/CustomersTable';
import { Main, Section, ShowMore } from './styles';
import { NavLink } from 'react-router-dom';
const AdminHome = () => {
  return (
    <Main>
      <h1>Bienvenido admin</h1>
      <Section>
        <h2>Productos</h2>
        <ProductsTable />
        <ShowMore>
          <NavLink to='/home-admin/products'>Mostrar más</NavLink>
        </ShowMore>
      </Section>
      <Section>
        <h2>Clientes</h2>
        <CustomersTable />
        <ShowMore>
          <NavLink to='/home-admin/customers'>Mostrar más</NavLink>
        </ShowMore>
      </Section>
    </Main>
  );
};

export { AdminHome };
