import { styled } from 'styled-components';
import { colors, textFont } from '../../styles/GlobalStyles';

const ContainerBodyModal = styled.div`
  font-family: ${textFont};
  margin-inline: 10px;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  gap: 10px;
  & div:nth-child(1) {
    font-size: 1.6rem;
  }
  & div:nth-child(2) {
    font-size: 1.2rem;
    height: 100px;
    width: 200px;
    overflow-y: auto;
    @media (max-width: 570px) {
      width: 100%;
    }
  }
  p {
    font-size: 1.2rem;
  }
  @media (max-width: 570px) {
    text-align: center;
  }
`;

const ModalBody = styled.div`
  display: flex !important;
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
  .added {
    background-color: ${colors.buttonHover};
  }
  @media (max-width: 570px) {
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
  font-weight: 500;
  background-color: ${colors.primaryColor};
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${colors.buttonHover};
  }
`;

export { ContainerBodyModal, ModalBody, AddButton };
