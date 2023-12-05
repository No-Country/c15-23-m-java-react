import { styled } from 'styled-components';
import { textFont, titleFont } from '../../styles/GlobalStyles';

const Card = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    max-width: 340px;
    margin: 20px;
    &:hover{
        box-shadow: 5px 5px 20px white;
        transition: all 0.2s linear;
        transform: translateY(-5px);
    }
`;

const ItemBodyCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    background-color: white;
    gap: 10px;
    & p{
        font-size: 16px;
        font-family: ${textFont}
    }
    & a{
        & button{
            background-color: #56c9a0;
            padding: 10px;
            border-radius: 10px;
            border-color: transparent;
            cursor:pointer;
            &:hover{
                background-color: #97dec5;
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
    max-width: 338px;
    & img{
        transform: scale(1);
        transition: all 0.2s ease-in-out;
        width: 350xp;
        height: 280px;
        &:hover{
            transform: scale(1.8);
        }
    }
`;

export {Card, ItemBodyCard, ItemTitleCard, ItemImgCard}
