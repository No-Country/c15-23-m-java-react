import { ProductsTable } from '../../components/Tables/ProductsTable';
import { CustomersTable } from '../../components/Tables/CustomersTable';
import { Main, Section, ShowMore } from './styles';
const AdminHome = () => {
  return (
    <Main>
      <h1>Bienvenido admin</h1>
      <Section>
        <h2>Productos</h2>
        <ProductsTable />
        <ShowMore>
          <a href='#'>Mostrar más</a>
        </ShowMore>
      </Section>
      <Section>
        <h2>Clientes</h2>
        <CustomersTable />
        <ShowMore>
          <a href='#'>Mostrar más</a>
        </ShowMore>
      </Section>
    </Main>
  );
};

export { AdminHome };
