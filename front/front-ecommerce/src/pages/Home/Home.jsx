/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {getFetch} from '../../api/getFetch'
import {MainContainer, Section, WelcomeDiv, TextoDiv, InputDiv, ImgDiv, Categorias, TrendingItem} from './styles'
import Carousel from '../../components/Carousel/Carousel'
import ListCard from '../../components/ListCard/ListCard'

const Home = () => {
  
  const [products, setProducts] = useState([])
    useEffect(()=>{
        getFetch()
        .then(products => setProducts(products))
        .catch(err => err)
    },[])

  return (
    <MainContainer>
      <Section>
        <WelcomeDiv>
          <TextoDiv>
            <strong><h1>Bienvenido</h1></strong>
            <strong><h2>Encuentra los mejores productos de la web</h2></strong>
            <p>Compra por marcas u ofertas.</p>
          </TextoDiv>
          <ImgDiv>
            <img src="/images/imgHome.jpg" alt="imagen de home" />
          </ImgDiv>
        </WelcomeDiv>
          <InputDiv>
            <input type="search" placeholder='¿Qué estas buscando?'/>
            <button>Buscar</button>
          </InputDiv>
      </Section>
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