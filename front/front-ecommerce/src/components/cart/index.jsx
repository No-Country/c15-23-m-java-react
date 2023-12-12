import {
  CartContainer,
  List,
  Item,
  Product,
  ProductImg,
  Quantity,
} from './styles';
import { useEffect, useState } from 'react'
import { MdAdd, MdRemove, MdDelete } from 'react-icons/md';
import Button from '../../assets/elementos/Boton';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const [products, setProducts] = useState([])
    const getFetch = async ()=>{  
        try{
            const url = 'https://64ee10061f87218271424186.mockapi.io/data'
            const prodJson = await fetch(url)
            const prod = await prodJson.json()
            return prod
        }
        catch (err) {
            console.log(err);
        }
    }  
    useEffect(()=>{
        getFetch()
        .then(products => setProducts(products))
        .catch(err => err)
    },[])

  return (
    <CartContainer>
      <h2>Mi orden</h2>
      <List>
        {products.map(({ id, titulo, categoria, precio, imagen }) => (
          <li key={id}>
            <Item>
              <Product>
                <ProductImg>
                  <img src={imagen} alt='product image' />
                </ProductImg>
                <div>
                  <p>{titulo}</p>
                  <p>{categoria}</p>
                </div>
              </Product>
              <Quantity>
                <div>
                  <button>
                    <MdRemove />
                  </button>
                  <p>2</p>
                  <button>
                    <MdAdd />
                  </button>
                </div>
                <button>
                  <MdDelete />
                </button>
              </Quantity>
              <p>${precio}</p>
            </Item>
          </li>
        ))}
      </List>
      <NavLink to="/checkout"><Button>Verificar</Button></NavLink>
    </CartContainer>
  );
};

export { Cart };
