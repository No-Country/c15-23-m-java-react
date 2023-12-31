/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { InputDiv } from '../Search/styles';
import ProductList from './ProductList';
import { getProducts } from '../../api/getProducts';
import Loading from '../Loading/Loading';

export const SearchBar = ({loading, setLoading}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isListVisible, setListVisibility] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    filterResults(newSearchTerm);
    if (newSearchTerm.trim().length === 0) {
                    setListVisibility(false);
                } else {
                    setListVisibility(true);
                }
  };

  const filterResults = (searchTerm) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const filtered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(lowerSearchTerm) ||
        product.category.toLowerCase().includes(lowerSearchTerm)
      );
    });

    setFilteredProducts(filtered);
    setSelectedIndex(filtered.id)

    if (searchTerm.trim().length === 0) {
      setFilteredProducts(products);
    }
  };

  useEffect(() => {
    getProducts()
      .then((fetchedProducts) => {
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  },[]);

  return (
    <>
      <InputDiv>
        <input
          placeholder="¿Qué estás buscando?"
          value={searchTerm}
          onChange={handleChange}
        />
      </InputDiv>

      {loading ? <Loading /> : ( isListVisible && filteredProducts.length > 0 && <ProductList products={filteredProducts} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />)}
    </>
  );
};