import { styled } from 'styled-components';
import { titleFont, colors } from '../../styles/GlobalStyles';

const NavContainer = styled.nav `
h2{ 
    font-weight: 400;
    img{
      margin-right: 20px;
      cursor: pointer;
    }
   span{
      font-weight: bold;
      font-size: 12px;
    }
  }
  padding: 15px;
  background-color: ${colors.primaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 2rem;
  }

  .links-right{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    z-index: 2;
    a{
      color: white;
      font-size: 2rem;
      font-family: ${titleFont};
      display: block;
    }
    @media(min-width: 768px){
      padding: 5px;
      position: initial;
      margin: 0;
      a{
        font-size: 1.2rem;
        font-weight: bold;
        font-family: ${titleFont};
        color: white;
        display: inline;      
      }
      display: block;
    }
  } 
  .links-right.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 43%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      font-weight: bold;
      font-family: ${titleFont};
      margin-top: 1rem;
      color: #213547;
    }
  }
  .links-left{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    z-index: 2;
    a{
      color: white;
      font-size: 2rem;
      font-family: ${titleFont};
      display: block;
      
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      margin-right:auto;
      a{
        font-size: 1.2rem;
        font-weight: bold;
        font-family: ${titleFont};
        color: #213547;
        display: inline;      
      }
      display: block;
    }
  }
  .links-left.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      font-weight: bold;
      font-family: ${titleFont};
      margin-top: 1rem;
      color: #213547;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;      
    }
  }
`
const BgDiv = styled.div`
  background-color: ${colors.primaryColor};
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
const Burguer = styled.div`
.nav-icon-5{
  width: 35px;
  height: 30px;
  margin: 0px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  color: #213547;
  z-index: 2; 
}
.nav-icon-5 span{
  background-color: #213547;
  position: absolute;
  border-radius: 2px;
  transition: .3s cubic-bezier(.8, .5, .2, 1.4);
  width:100%;
  height: 4px;
  transition-duration: 500ms; 
}
.nav-icon-5 span:nth-child(1){
  top:0px;
  left: 0px;
}
.nav-icon-5 span:nth-child(2){
  top:13px;
  left: 0px;
  opacity:1;
}
.nav-icon-5 span:nth-child(3){
  bottom:0px;
  left: 0px;
}
.nav-icon-5:not(.open):hover span:nth-child(1){
  transform: rotate(-4deg) scaleY(1.1);
}
.nav-icon-5:not(.open):hover span:nth-child(2){
  transform: rotate(4deg) scaleY(1.1);
}
.nav-icon-5:not(.open):hover span:nth-child(3){
  transform: rotate(-4deg) scaleY(1.1);
}
.nav-icon-5.open span:nth-child(1){
  transform: rotate(45deg);
  top: 13px;
}
.nav-icon-5.open span:nth-child(2){
  opacity:0;
}
.nav-icon-5.open span:nth-child(3){
  transform: rotate(-45deg);
  top: 13px;
}
`
export { NavContainer, BgDiv, Burguer };
