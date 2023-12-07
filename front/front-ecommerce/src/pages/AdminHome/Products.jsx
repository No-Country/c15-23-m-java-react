import { ProductsTable } from '../../components/Tables/ProductsTable';
import { Section, Actions, SearchBar } from './styles';
import { MdAdd } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';

const Products = () => {
  return (
    <main>
      <Section>
        <h2>Lista de Productos</h2>
        <Actions>
          <SearchBar>
            <input type='text' placeholder='Buscar producto' />
            <button type='submit'>
              <IoSearch />
            </button>
          </SearchBar>
          <button>
            <MdAdd />
            Añadir producto
          </button>
        </Actions>
        <ProductsTable />
      </Section>
    </main>
  );
};

export { Products };
