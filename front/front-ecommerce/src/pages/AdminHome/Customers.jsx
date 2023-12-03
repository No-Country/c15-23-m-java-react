import { CustomersTable } from '../../components/Tables/CustomersTable';
import { Actions, SearchBar, Section } from './styles';
import { IoSearch } from 'react-icons/io5';

const Customers = () => {
  return (
    <main>
      <Section>
        <h2>Lista de clientes</h2>
        <Actions>
          <SearchBar>
            <input type='text' placeholder='Buscar cliente' />
            <button>
              <IoSearch />
            </button>
          </SearchBar>
        </Actions>
        <CustomersTable />
      </Section>
    </main>
  );
};

export { Customers };
