import { styled } from 'styled-components';
import { textFont } from '../../styles/GlobalStyles';

const ContainerBodyModal = styled.div`
    font-family: ${textFont};
    margin-inline: 10px;
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
    gap: 10px;
    & div:nth-child(1){
        font-size: 16px;
    }
    & div:nth-child(2){
        /* font-size: 10px; */
        height: 60px;
        width: 200px;
        overflow-y:auto;
        @media (max-width: 570px){
            width: 100%;
        }
    }
    @media (max-width: 570px){
        text-align: center;
    }
`;

const ModalBody = styled.div`
    display: flex !important;
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
    @media (max-width: 570px){
        flex-direction: column;
        gap: 10px;
    }
`;

const AddButton = styled.button`
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    background-color: rgba(86, 201, 160, 1);
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #39ad84;
    }
`;

export {ContainerBodyModal, ModalBody, AddButton}