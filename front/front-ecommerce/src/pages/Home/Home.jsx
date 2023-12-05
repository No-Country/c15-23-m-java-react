/* eslint-disable no-unused-vars */
import React from 'react'
import {MainContainer, Section, WelcomeDiv, TextoDiv, InputDiv, ImgDiv, Categorias} from './styles'
import Carousel from '../../components/Carousel/Carousel'
import CardItem from '../../components/CardItem/CardItem'
import './Home.css'
import Slider from '../../components/Slider/Slider'

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
      <Section>
        <Categorias>
          <div className='trendingItem'>
            <i><p>Productos en tendencias</p></i>
          </div>
        </Categorias>
        <div className='CardContainer'>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </Section>
    </MainContainer>
  )
}

export default Home