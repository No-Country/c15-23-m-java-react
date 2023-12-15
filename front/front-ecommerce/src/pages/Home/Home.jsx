/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import {getProducts} from '../../api/getProducts'
import {MainContainer, Section, WelcomeDiv, TextoDiv, ImgDiv, Categorias, CardContainer, TrendingItem, SectionWelcome} from './styles'
import Carousel from '../../components/Carousel/Carousel'
import ListCard from '../../components/ListCard/ListCard'
import { SearchBar } from '../../components/Search/SearchBar'

const Home = () => {
  
  const [products, setProducts] = useState([])
    useEffect(()=>{
        getProducts()
        .then(products => setProducts(products))
        .catch(err => err)
    },[])

  return (
    <MainContainer>
      <SectionWelcome>
        <WelcomeDiv>
          <TextoDiv>
            <strong><h1>Bienvenido</h1></strong>
            <strong><h2>Encuentra los mejores productos de la web</h2></strong>
            <p>Compra por marcas u ofertas.</p>
          </TextoDiv>
        </WelcomeDiv>

        <SearchBar products={products}/>
  
      </SectionWelcome>

      <Section>
        <Categorias>
          <h2>Categorías</h2>
        </Categorias>
        <Carousel />
      </Section>

      <Section>
        <Categorias>
          <TrendingItem>
            <i><p><a href="">Productos en tendencias</a></p></i>
          </TrendingItem>
        </Categorias>
        <ListCard products={products}></ListCard>
      </Section>
    </MainContainer>
  )
}

export default Home