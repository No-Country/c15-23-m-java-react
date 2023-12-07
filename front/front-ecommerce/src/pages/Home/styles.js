import { styled } from 'styled-components';
import { titleFont, textFont } from '../../assets/styles/GlobalStyles';

const MainContainer = styled.main`
    max-width: 100%;
    background-color: #FFFFFF;
    color: black;
    padding: 40px;
    @media (max-width: 768px) {
        padding:0px;
        padding-block: 20px;
    }
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Section = styled.section`
    margin-block: 10px;
    background-color: #D9D9D9;
    padding-inline:20px;
    @media (max-width: 900px) {
        margin-inline: 0px;
        padding-inline:0px;
    }
`;

const WelcomeDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding-block: 20px;
    @media (max-width: 900px){
        width: 100%;
        height: 100%;
        padding: 0px;
    }
`;

const TextoDiv = styled.div`
    height: auto;
    position: relative;
    width: 50%;
    padding: 30px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    & h1{
        font-size: 62px;
        font-family: ${titleFont};
        position: relative;
    };
    & h2{
        font-size: 44px;
        // font-weight: 900; 
        word-wrap: break-word;
        font-family: ${titleFont};
        position: relative;
    };
    & p{
        font-size: 26px;
        font-family: ${textFont};
        position: relative;
    }
    @media(max-width: 576px){
        & h1 { 
            font-size: 50px;
        }
        & h2 {
            font-size: 32px;
        }
        & p{
            font-size: 18px;
        }
    }
    @media(max-width: 900px){
        width:100%;
        height: 350px;
        text-align: center;
        background-color: white;
        &::before{
            content: "";
            background-image: url('/images/imgHome.jpg');
            background-size: cover;
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            opacity: 0.65;
        }
    }
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    width: 100%;
    & input{
        height: 54px;
        width: 40%;
        border-radius: 10px;
        border: none;
        font-family: ${textFont};
        padding-inline: 10px 10px;
        &::placeholder{
            padding-inline: 30px 10px;
            font-size: 16px;
            background-image: url(/images/search.svg);
            background-size: 18px 18px;
            background-repeat: no-repeat;
            background-position: 10px center;
        };
        @media(max-width: 900px){
            width: 80%;
        }
    };
    & button{

        background-color: #56c9a0;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        padding: 15px;
        text-align: center;
        margin-inline: 20px;
        border-radius: 10px;
        font-family: ${textFont};
        &:hover{
            background-color: #39ad84;
        }
    };
    @media(max-width: 900px){
        justify-content: center;
        width:100%
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
    @media (max-width: 900px){
       display:none
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
    padding: 40px
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
    & a{
        color: black;
        text-decoration: none;
    }
    & p{
        margin: 0px;
        text-align: center;
        padding-inline: 30px;
        font-size: 14px;
        opacity: 0.7;
    }
`;

export {MainContainer, Section, WelcomeDiv, TextoDiv, InputDiv, ImgDiv, Categorias, CardContainer, TrendingItem}