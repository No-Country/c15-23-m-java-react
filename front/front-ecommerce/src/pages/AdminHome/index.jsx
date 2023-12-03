import { styled } from 'styled-components';
import { ProductsTable } from '../../components/Tables/ProductsTable';
import { CustomersTable } from '../../components/Tables/CustomersTable';
import { colors, textFont, titleFont } from '../../styles/GlobalStyles';

const Main = styled.main`
  display: grid;
  grid-template-rows: 50px 1fr 1fr;
  h1 {
    height: 100%;
    padding: 10px 0;
    text-align: center;
    font-size: 2.5rem;
    font-family: ${titleFont};
    color: ${colors.primaryText};
  }
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  h2 {
    font-size: 2rem;
    font-family: ${titleFont};
    color: ${colors.primaryText};
    width: 95%;
    text-align: left;
    margin-bottom: 20px;
    @media (min-width: 900px) {
      width: 80%;
    }
  }
`;

const ShowMore = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  @media (min-width: 900px) {
    width: 80%;
  }

  a {
    width: 150px;
    padding: 10px 0;
    background-color: ${colors.primaryLightColor};
    border-radius: 10px;
    text-align: center;
    font-size: 1.4rem;
    font-family: ${textFont};
    color: ${colors.primaryText};
    font-weight: bold;
    text-decoration: none;
    &:hover {
      background-color: ${colors.primaryColor};
      color: white;
    }
  }
`;

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
