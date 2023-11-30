import { useState } from 'react';
import {NavContainer, BgDiv, Burguer}  from './styles';
import Logo from '../../../../public/images/logo-shopswifly 5.png'
const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //Cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <div>
       <NavContainer>
       <h2><img width={80} src={Logo}></img></h2>
        <div className={`links-left ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">Inicio</a>
          <a onClick={handleClick} href="#h">Categorias</a>
          <a onClick={handleClick} href="#h">Productos</a>
          <a onClick={handleClick} href="#h">Shop</a>
        </div>
        <div className={`links-right ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">Registro</a>
          <a onClick={handleClick} href="#h">Inicio Sesion</a>
         {/*  <a onClick={handleClick} href="#h">Productos</a>
          <a onClick={handleClick} href="#h">Shop</a>
          <a onClick={handleClick} href="#h">Cerrar Sesion</a> */}
        </div>
        <div className='burguer'>
        <Burguer>
      <div  onClick={handleClick} 
            className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burguer>
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
       </NavContainer>
    </div>
  )
}

export { Navbar }