import React from 'react'
import {MainContainer, Section, WelcomeDiv, TextoDiv, InputDiv, ImgDiv, Categorias} from './styles'
// import './style.css'

const Home = () => {
  return (
    <MainContainer>
      <Section>
        <WelcomeDiv>
          <TextoDiv>
            <h1>Bienvenido</h1>
            <h2>Encuentra los mejores productos de la web</h2>
            <p>Compra por marcas u ofertas.</p>
            <InputDiv>
              <input type="search" placeholder='¿Qué estas buscando?'/>
              <button>Buscar</button>
            </InputDiv>
          </TextoDiv>
          <ImgDiv>
            <img src="/images/imgHome.jpg" alt="imagen de home" />
          </ImgDiv>
        </WelcomeDiv>
      </Section>
      <Section>
        <Categorias>
          <h2>Categorías</h2>
        </Categorias>
        <div>
          <p>aca va el slider</p>
        </div>
      </Section>  

    </MainContainer>
  )
}

export default Home