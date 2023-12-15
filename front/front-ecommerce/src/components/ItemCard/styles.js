import { styled } from 'styled-components';
import { textFont, titleFont } from '../../styles/GlobalStyles';

const Card = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 340px;
    margin: 20px;
    background-color: white;
    border-radius: 10px;
    &:hover{
        box-shadow: 5px 5px 20px white;
        transition: all 0.2s linear;
        transform: translateY(-5px);
    }
`;

const ItemBodyCard = styled.div`
    display: flex;
    flex-direction: column;
    // padding: 2rem 0;
    background-color: white;
    gap: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 250px;
    @media (max-width: 570px){
        height: 300px;
    }
    & p{
        font-size: 14px;
        font-family: ${textFont};
        padding-inline: 10px;
    }
    & div{
        justify-content: end;
        margin-bottom: 10px;
        display: flex;
        align-self: center;
        & button{
                background-color: #56c9a0;
                width: 120px;
                border: none;
                color: #fff;
                border-radius: 10px;
                font-family: Merriweather Sans,sans-serif;
                cursor: pointer;
                font-size: 16px;
                font-weight: 700;
                padding: 15px;
                text-align: center;
                &:hover{
                    background-color: #39ad84;
                }
        }
    }
`;

const ItemTitleCard = styled.div`
    padding: 0.3rem 1rem;
    font-size: 22px;
    font-family: ${titleFont}
`;

const ItemImgCard = styled.div`
    overflow: hidden;
    background-color: white;
    padding:20px;
    width: 100%;
    & img{
        transform: scale(1);
        transition: all 0.2s ease-in-out;
        border: none;
        width: 220px;
        height: 320px;
        &:hover{
            transform: scale(1.1);
        }
    } 
    @media (max-width: 570px){
        text-align: center;
    }
`;

export {Card, ItemBodyCard, ItemTitleCard, ItemImgCard}
