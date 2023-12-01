import { 
    StyledIconContainer,
    StyledFooterContainer, 
    StyledIconContactCall, 
    StyledIconContactEmail, 
    StyledLeftColumn, 
    StyledLogo, 
    StyledRightColumn, 
    StyledSocialIcon, 
    StyledSocialIconContainer, 
    StyledText
} from './styles';
import logo from '../../../public/images/logo-ss.png';

import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa6";


export const Footer = () => {
  return (
    <>
       <StyledFooterContainer>
            <StyledLeftColumn>
                <StyledText>
                    <StyledLogo src={logo} alt='logo'/> <br/>

                    ¡Productos entregados a su puerta! <br/>
                        
                    <StyledSocialIconContainer>
                        <StyledSocialIcon><FaInstagram /></StyledSocialIcon>
                        <StyledSocialIcon><FaFacebook /></StyledSocialIcon>
                        <StyledSocialIcon><FaTwitter /></StyledSocialIcon>
                    </StyledSocialIconContainer>
                </StyledText>
            </StyledLeftColumn>

            <StyledRightColumn>
                <StyledText>
                    ¿Necesita ayuda? <br/>
                    Nuestro equipo de soporte está disponible 24 <br/>
                    horas al día, 7 días a la semana. <br/>

                    <StyledIconContainer>
                        <StyledIconContactCall /> 
                        (+123) 000 111 222 333
                    </StyledIconContainer>
                    <br/>
                    <StyledIconContainer>
                        <StyledIconContactEmail />
                        support@shopswiftly.com
                    </StyledIconContainer>
                    
                </StyledText>
            </StyledRightColumn>
        </StyledFooterContainer> 
            
      
    </>
  )
};
