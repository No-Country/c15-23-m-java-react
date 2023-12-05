import { styled } from 'styled-components';
import { titleFont, colors } from '../../styles/GlobalStyles';

const FormContainerSignUp = styled.nav `
   background-color: ${colors.primaryLightColor};
   border-radius: 10px;
   font-family: ${titleFont};
   box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
   padding: 20px;
   width: 40%;
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   @media(max-width: 768px){
       width: 90%;     
    }
  
   h2{
      text-align: center;
      margin-bottom: 30px;
      font-size: 20px;
   }

 div{
   display: flex;
   flex-direction:column;
   margin: 0 auto;
 
 label{
      font-size: 12px;
      font-weight: bold; 
      font-family: ${titleFont};      
   }

   input{
      border: none;
      border-radius: 10px ;
      padding: 5px;
      width: 15vw;      
      padding-left: 10px;
      outline: none;
      border: 1px solid ${colors.primaryLightColor};
      @media(max-width: 768px){
         width: 40vw;     
    }
   }
   p{
      font-size: 12px;
      margin-bottom:20px;
      margin-top: 10px;
   }
}
`
export {FormContainerSignUp}