import { styled } from 'styled-components';
import { textFont } from '../../assets/styles/GlobalStyles';

const Button = styled.button`
    display: flex;
    background-color: #D9D9D9;
    color: black;
    padding-inline: 0px;
    cursor:pointer;
    border-radius: 8px;
    text-align: center;
    padding: 15px;
    border-color: transparent;
    gap:10px;
    p{
        font-family: ${textFont};
        margin: 0px;
    }
    &:hover{
        border-color: black;
    }
    & svg{
        margin-top: 3px
    }
`;

export { Button }