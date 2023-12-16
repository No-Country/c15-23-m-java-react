import { styled } from 'styled-components';
import { titleFont, textFont} from '../../styles/GlobalStyles';

const image = '../../../public/images';

const backgroundImageStyle = {
  background: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('${image}/fondo.png')`,
};


const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const SectionWelcome = styled.section`
    padding: 40px 0 60px 0;
    ${backgroundImageStyle};
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;

 
    @media (max-width: 900px){
        padding: 0px;
        padding-block: 20px;
        margin-inline: 0px;
        width: 100%;
        height: 100%;
    }
`;

const Section = styled.section`
  // margin-block: 10px;
  background-color: #f0f0f0;
  @media (max-width: 900px) {
    margin-inline: 0px;
    padding-inline: 0px;
  }
`;

const WelcomeDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-block: 20px;
  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    padding: 0px;
  }
`;

const TextoDiv = styled.div`
  width: 100%;
  padding: 30px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 5.5rem;
  text-align: center;
  text-shadow: 0 0 35px #fff;
  color: #f0f0f0;

  & h1 {
    font-size: 62px;
    font-family: ${titleFont};
    position: relative;
  }
  & h2 {
    font-size: 44px;
    // font-weight: 900;
    word-wrap: break-word;
    font-family: ${titleFont};
    position: relative;
  }
  & p {
    font-size: 26px;
    font-family: ${textFont};
    position: relative;
  }
  @media (max-width: 576px) {
    & h1 {
      font-size: 50px;
    }
    & h2 {
      font-size: 32px;
    }
    & p {
      font-size: 18px;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 350px;
    text-align: center;
  }
`;

const ImgDiv = styled.div`
  width: 50%;
  margin: auto;
  width: auto;
  height: auto;
  padding-block: 20px;
  position: relative;
  left: 60px;
  bottom: -45px;
  & img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const Categorias = styled.div`
  height: 80px;
  display: flex;
  font-size: 2rem;
  font-family: ${titleFont};
  align-items: center;
  justify-content: center;
  margin-block: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-basis: 1, 1, 0;
  gap: 20px;
  padding: 40px;
`;

const TrendingItem = styled.div`
  max-width: 800px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  border-radius: 10px;
  & a {
    color: black;
    text-decoration: none;
  }
  & p {
    margin: 0px;
    text-align: center;
    padding-inline: 30px;
    font-size: 14px;
    opacity: 0.7;
  }
`;

export {
  MainContainer,
  Section,
  WelcomeDiv,
  TextoDiv,
  ImgDiv,
  Categorias,
  CardContainer,
  TrendingItem,
  SectionWelcome,
};
