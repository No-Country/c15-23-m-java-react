import { useState, useEffect } from 'react';
import { NavContainer, BgDiv, Burguer } from './styles';
import Logo from '/images/logo.png'
import { NavLink } from 'react-router-dom';
import { getUser } from '../../api/getUser'; 

const Navbar = () => {

const [user, setUser] = useState(null) 
const [error, setError] = useState(null);

useEffect(()=>{
  const fetchData = async () => {
    try {
      const user = await getUser();
      setUser(user);
    } catch (err) {
      console.error(err);
      setError('Error al cargar usuario.');
    }
  };
  fetchData();  
}, [])

  const [clicked, setClicked] = useState(false)
  
  const handleClick = () => {
    //Cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }

  const closeBurguer = () => {
    setClicked(false)
  }
  return (
    <div>
      <NavContainer>
        <h2><NavLink to="/home"><img width={80} src={Logo}></img></NavLink></h2>
        <div className={`links-left ${clicked ? 'active' : ''}`}>
          <NavLink to="/home" onClick={closeBurguer} >Inicio</NavLink>
          <NavLink to="/shop" onClick={closeBurguer}>Mi carrito</NavLink>
          {/* <NavLink to="/products">Productos</NavLink>
          <NavLink to="/purchase-history">Compras Realizadas</NavLink>
          <NavLink to="/user-profile">Perfil Usuario</NavLink>
          <NavLink to="/home-admin">Categorias</NavLink> */}
        </div>
         <div className={`links-right ${clicked ? 'active' : ''}`}>
         {error ? (<p>{error}</p>) :
         (user && (
          <a>{user?.nombre?.charAt(0).toUpperCase() + user?.nombre?.slice(1)} {''} 
             {user?.apellido?.charAt(0).toUpperCase() + user?.apellido?.slice(1)} 
          </a>      
         ))}
        </div> 
        <div className='burguer'>
          <Burguer>
            <div onClick={handleClick}
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