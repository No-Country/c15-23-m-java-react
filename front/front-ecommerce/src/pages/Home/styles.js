import { styled } from 'styled-components';
import { titleFont, textFont } from '../../assets/styles/GlobalStyles';

const MainContainer = styled.main`
    max-width: 100%;
    background-color: #FFFFFF;
    color: black;
    padding: 40px;
    @media (max-width: 576px) {
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
    padding-inline:40px;
    @media (max-width: 576px) {
        margin-inline: 0px;
        padding-inline:20px;
    }
`;

const WelcomeDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
`;

const TextoDiv = styled.div`
    width: 50%;
    padding: 30px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    & h1{
        font-size: 62px;
        font-family: ${titleFont};
    };
    & h2{
        font-size: 44px;
        font-weight: 900; 
        word-wrap: break-word;
        font-family: ${titleFont};
    };
    & p{
        font-size: 26px;
        font-family: ${textFont};
    }
`;

const InputDiv = styled.div`
    & input{
        height: 46px;
        width: 350px;
        border-radius: 10px;
        border: none;
        font-family: ${textFont};
        padding-inline: 20px 10px;
        &::placeholder{
            font-size: 16px;
            background-image: url(/images/search.svg);
            background-size: 20px 20px;
            background-repeat: no-repeat;
            background-position: 288px center;
        };
    };
    & button{
        margin-inline: 20px;
        height: 46px;
        border-radius: 10px;
        font-family: ${textFont};
        background-color: #56c9a0;
        width: 92px;
        font-size: 16px;
        &:hover{
            border-color: black;
        };
    };
`;

const ImgDiv = styled.div`
    width: 50%;
    margin: auto;
    width: auto;
    height: auto;
    padding-block: 20px;
    & img {
        width: 400px;
        height: 372px;
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

export {MainContainer, Section, WelcomeDiv, TextoDiv, InputDiv, ImgDiv, Categorias}