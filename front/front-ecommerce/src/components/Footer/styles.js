import styled from 'styled-components';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export const StyledFooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #56c9a0;
  color: black;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledLeftColumn = styled.div`
  margin-right: 30px;
  margin-top: 15px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const StyledRightColumn = styled.div`
  margin-right: 30px;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const StyledText = styled.div`
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin: 0;
  margin-bottom: 15px;
  line-height: 2.5;
`;

export const StyledLogo = styled.img`
  width: 200px;
`;

export const StyledSocialIconContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-top: 15px;
`;

export const StyledSocialIcon = styled.a`
  width: 40px;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

export const StyledIconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 10px;
  font-weight: bold;
  color: #333;
`;

export const StyledIconContactCall = styled(BsFillTelephoneFill)`
  font-size: 18px;
  margin-right: 10px;
`;

export const StyledIconContactEmail = styled(MdEmail)`
  font-size: 20px;
  margin-right: 10px;
`;
