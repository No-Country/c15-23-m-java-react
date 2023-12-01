import { styled } from 'styled-components';
import { textFont } from '../../assets/styles/GlobalStyles';

const Button = styled.button`
    display: flex;
    background-color: #D9D9D9;
    color: black;
    padding-inline: 0px;
    cursor:pointer;
    p{
        padding-inline: 15px;
        font-family: ${textFont};
    }
    &:hover{
        border-color: black;
    }
`;

export { Button }