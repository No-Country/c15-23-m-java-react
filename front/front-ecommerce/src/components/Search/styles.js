import styled from 'styled-components';
import { textFont } from '../../styles/GlobalStyles';

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 10px 0 30px 0;
  // margin-bottom: 90px;

  & input {
    margin-inline: 10px;
    width: 50%;
    height: 40px;
    border-radius: 10px;
    border: none;
    outline: none;
    padding-inline: 30px 10px;
    font-family: ${textFont};
    &::placeholder {
      padding-inline: 30px 10px;
      font-size: 16px;
      background-image: url(/images/search.svg);
      background-size: 18px 18px;
      background-repeat: no-repeat;
      background-position: 10px center;
    }

    &:hover {
      background-color: #f0f0f0;
    }
  }

  & button {
    background-color: #56c9a0;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding: 11px;
    text-align: center;
    margin-inline: 5px;
    border-radius: 10px;
    font-family: ${textFont};
    &:hover {
      background-color: #39ad84;
    }
  }

  @media (max-width: 900px) {
    display: flex;

    & input {
      width: 65%;
      height: 40px;
      font-size: 14px;
      padding-inline: 5px 5px;

      & button {
        width: 40%;
        height: 20px;
        font-size: 10px;
        padding-inline: 10px 10px;
      }
    }
  }
`;

export const StyledProductList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  list-style-type: none;
  padding: 0;
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;

export const StyledProductItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding-inline: 4%;
  /* border: 1px solid #56c9a0; */
  margin: 5px;
  background-color: white;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 576px) {
    width: 90%;
    padding-inline: 1%;
  }
  & button {
    background-color: #56c9a0;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding: 11px;
    text-align: center;
    margin-inline: 5px;
    border-radius: 10px;
    font-family: ${textFont};
    &:hover {
      background-color: #39ad84;
    }
  }
`;

export const StyledProductImage = styled.img`
  max-width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 5px;
  margin-right: 10px;
  & img {
    width: 100px;
    height: 100px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #000;
`;