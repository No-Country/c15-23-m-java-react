import{ useEffect, useState } from 'react';
// import axios from 'axios';
import { InputDiv } from '../Search/styles';
import ProductList from './ProductList';


export const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [isListVisible, setListVisibility] = useState(false);

    const handleSearch = async () => {

        const URL_API = 'https://64ee10061f87218271424186.mockapi.io/data';

        try {
            const response = await fetch(`${URL_API}?search=${searchTerm}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Error en la petición');
        }
        
        const data = await response.json();
            setProducts(data);
        } catch (error) {
            return error;
        }

    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        filterResults(event.target.value);

        if (event.target.value.trim().length === 0) {
            setListVisibility(false);
        } else {
            setListVisibility(true);
        }

    }

    const filterResults = (searchTerm) => {
        const filteredProducts = products.filter((product) => {
            if (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
                return product;
            }
        });

        setProducts(filteredProducts)

        
        if (event.target.value.trim().length === 0) {
            setListVisibility(false);
        } else {
            setListVisibility(true);
        }
    };

    useEffect(() => {
        handleSearch();
    },[])


  return (
    <>
        <InputDiv>
        <input
            placeholder="¿Qué estás buscando?"
            value={searchTerm}
            onChange={handleChange}
        />

        <button value={searchTerm} onClick={handleSearch}>Buscar</button>
        </InputDiv>

        { isListVisible && products && <ProductList products={products} /> }
    </>
    
 )
}
