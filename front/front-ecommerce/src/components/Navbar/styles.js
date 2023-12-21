import { styled } from 'styled-components';
import { titleFont, colors } from '../../styles/GlobalStyles';

const CartIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  div {
    position: relative;
    svg {
      font-size: 2rem;
    }
    span {
      top: 0;
      right: -10px;
      width: 15px;
      height: 15px;
      position: absolute;
      background-color: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.1rem;
      font-weight: bold;
      font-family: ${titleFont};
      @media (min-width: 768px) {
        top: -5px;
      }
    }
  }
  p {
    margin-bottom: 0;
    margin-right: 5px;
  }
`;

const NavContainer = styled.nav`
  position: fixed;
  z-index: 20;
  h2 {
    font-weight: 400;
    img {
      width: 100px;
      margin-left: 1rem;
      cursor: pointer;
    }
    span {
      font-weight: bold;
      font-size: 12px;
    }
  }
  width: 100%;
  height: 60px;
  background-color: ${colors.primaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  a {
    color: black;
    text-decoration: none;
    margin-right: 1.5rem;
  }

  .links-right {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    z-index: 2;
    a {
      color: black;
      font-size: 2rem;
      font-family: ${titleFont};
      display: block;
      margin-left: 4px;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1.2rem;
        font-weight: bold;
        font-family: ${titleFont};
        color: black;
        display: inline;
      }
      display: contents;
    }
  }
  .links-left {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    z-index: 2;
    a {
      color: black;
      font-size: 2rem;
      font-family: ${titleFont};
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      margin-right: auto;
      a {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: ${titleFont};
        color: #213547;
        display: inline;
      }

      display: block;
      display: flex;
      width: 30%;
      justify-content: space-evenly;
      align-items: center;
    }
  }
  .links-left.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      font-weight: bold;
      font-family: ${titleFont};
      margin-top: 1rem;
      color: #213547;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
const BgDiv = styled.div`
  background-color: ${colors.primaryColor};
  position: fixed;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 90%;
  z-index: 1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const Burguer = styled.div`
  .nav-icon-5 {
    width: 25px;
    height: 25px;
    margin-right: 1.5rem;
    position: relative;
    cursor: pointer;
    display: inline-block;
    color: black;
    z-index: 2;
  }
  .nav-icon-5 span {
    background-color: #213547;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 500ms;
  }
  .nav-icon-5 span:nth-child(1) {
    top: 2px;
    left: 0;
  }
  .nav-icon-5 span:nth-child(2) {
    top: 11px;
    left: 0px;
    opacity: 1;
  }
  .nav-icon-5 span:nth-child(3) {
    bottom: 1px;
    left: 0px;
  }
  .nav-icon-5:not(.open):hover span:nth-child(1) {
    transform: rotate(0deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(2) {
    transform: rotate(0deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(3) {
    transform: rotate(0deg) scaleY(1.1);
  }
  .nav-icon-5.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
  }
  .nav-icon-5.open span:nth-child(2) {
    opacity: 0;
  }
  .nav-icon-5.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
  }
`;

const StyleIcon = styled.div`
  display: none;
  margin-bottom: 9px;
  font-size: 25px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const StyleIconUserBger = styled.div`
  display: block;
  font-size: 40px;
  margin-left: 5px;
  margin-top: 150px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export { NavContainer, BgDiv, Burguer, StyleIcon, StyleIconUserBger, CartIcon };
