import styled from 'styled-components';
import { textFont } from '../../styles/GlobalStyles';

const ContainerLoadingOrder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & h2{
        font-family: ${textFont};
    }
`;

export {ContainerLoadingOrder}