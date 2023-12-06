import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  margin: 0 auto;
  padding-top: 10px;
  text-align: left;
`;

export const StyledGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 10px;
    padding: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledColumn1 = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: hsla(160, 55%, 55%, 0.4);
    border-radius: 10px;
    padding: 20px;
    flex-direction: column;
    text-align: center; 
`;

export const StyledColumn2 = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: hsla(160, 55%, 55%, 0.4);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0px 25px;
    margin-bottom: 25px;
`;

export const StyledLabel = styled.label`
    margin-top: 20px;
    padding: 10px;
    text-align: left;
`;

export const StyledInput = styled.input`
    display: inline-flex;
    padding: 10px;
    background: #f0f0f0;
    border: none;
    border-radius: 10px;
    outline: none;
`;

export const StyledTextarea = styled.textarea`
    display: inline-flex;
    padding: 10px;
    background: #f0f0f0;
    border: none;
    border-radius: 10px;
    outline: none;
`;

export const StyledButton = styled.button`
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #56C9A0;
    color: #000;
    border: none;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        background-color: hsla(160, 55%, 55%, 0.6);
    }
`;

export const StyledImageContainer = styled.div`
  margin-top: 20px;
  min-height: 300px; 
  background-color: #f0f0f0;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const StyledImageInput = styled.input`
  margin-top: 40px;
`;

export const StyledImagePreview = styled.img`
    max-width: 100%;
    margin-top: 25px;
`;

export const StyledGroupInput = styled.div`
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 0px;
    }
`;

export const StyledColumn3 = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const StyledColumn4 = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    
    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;

export const StyledLine = styled.hr`
    border: 0.1px solid hsla(160, 55%, 55%, 0.4);
`;

export const StyledBtnContainer = styled.div`
    display: flex;
    gap: 50px;
    padding: 10px 100px;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
`;
