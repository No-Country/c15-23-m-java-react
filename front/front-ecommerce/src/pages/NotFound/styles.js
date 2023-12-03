import styled from 'styled-components';
import { textFont } from '../../styles/GlobalStyles';

const ContainerNotFound = styled.div`

    color: black;
    text-align: center;
    font-size: 16px;
    font-family: ${textFont};
    h2{
        color: black;
        font-size: 38px
    }
    h2:nth-child(1){
        font-weight:300
    }
    div{
        display: flex;
        justify-content: center;
        margin-block: 30px;
        
    }
    button.sc-bqyKbq.bknaE{
        background-color: rgba(86, 201, 160, 1);
        font-size: 20px
    }
`;

const IconNotFound = styled.div`
    font-size:80px;
`;

export {ContainerNotFound, IconNotFound}