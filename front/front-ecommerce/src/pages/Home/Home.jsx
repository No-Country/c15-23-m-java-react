import React from 'react'
import {MainContainer, Section, WelcomeDiv, TextoDiv, InputDiv, ImgDiv, Categorias} from './styles'
import Carousel from '../../components/Carousel/Carousel'
// import './style.css'

const Home = () => {
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
    </MainContainer>
  )
}

export default Home