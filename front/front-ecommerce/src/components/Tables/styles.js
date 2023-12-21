import { styled } from 'styled-components';
import { colors, textFont, titleFont } from '../../styles/GlobalStyles';
import { ProductImage } from '../OrderSummary/styles';

const TableContainer = styled.article`
  width: 95%;
  overflow-x: scroll;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;

  @media (min-width: 900px) {
    width: 80%;
    overflow-x: auto;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${colors.primaryText};
`;

const TableHead = styled.thead`
  width: 100%;
  height: 30px;
  font-family: ${titleFont};
  font-weight: bold;
  font-size: 1.4rem;
  text-transform: uppercase;
  background-color: ${colors.primaryLightColor};

  tr {
    th {
      text-align: center;
      min-width: 120px;
    }
    th:nth-last-child(2),
    th:last-child {
      min-width: 70px;
    }
    th:first-child {
      min-width: 40px;
      border-top-left-radius: 10px;
    }
    th:last-child {
      border-top-right-radius: 10px;
    }
  }
`;

const ImgCell = styled(ProductImage)`
  margin: 0;
  width: 40px;
  height: 40px;
  background-color: ${colors.primaryLightColor};
  img {
    width: 40px;
    height: 40px;
    mix-blend-mode: normal;
  }
`;

const TableItem = styled.tr`
  text-align: center;
  font-family: ${textFont};
  font-size: 1.3rem;
  height: 50px;
  border-bottom: 1px solid ${colors.grayBorders};
  td:nth-child(2) {
    height: 50px;
    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        text-align: center;
        width: 50%;
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
      }
    }
  }
  td.available {
    color: #0d730d;
  }
  td.not-available {
    color: #d53032;
  }
`;

const Edit = styled.a`
  color: ${colors.primaryColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`;

const Delete = styled.button`
  border: none;
  background-color: transparent;
  color: darkred;
  font-family: ${textFont};
  font-size: 2.5rem;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export { TableContainer, Table, TableHead, TableItem, ImgCell, Edit, Delete };
