import styled from 'styled-components';
import { titleFont, colors } from '../../styles/GlobalStyles';

export const StyledAddEditContainer = styled.div`
    margin: 0 auto;
    font-family: ${titleFont};
    color: ${colors.primaryText};
    font-size: 12px;
    align-items: center;
`;

export const StyledContainer = styled.div`
    display: flex;
    margin: auto;
    padding: 20px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
`;

export const StyledTitle = styled.h1`
    margin: auto;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

