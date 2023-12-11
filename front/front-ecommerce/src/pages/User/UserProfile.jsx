import React from 'react'
import styled from 'styled-components'
import userImag from '../../assets/img/user.svg'
import infoPersonal from '../../assets/img/infoPersonal.svg'
import flecha from '../../assets/img/flecha.svg'
import creditCard from '../../assets/img/creditCard.svg'
import idCard from '../../assets/img/idCard.svg'
import map from '../../assets/img/map.svg'

export const UserProfile = () => {
    return (
        <Main>
            <ResumenInfo>
                <img src={userImag} alt="user" />
                <div>
                    <h3>Nombre de Usuario</h3>
                    <h3>nombreusuario@gmail.com</h3>
                    <h3>direction 123. Cordoba Argentina</h3>
                </div>
            </ResumenInfo>
            <DatosUser>
                <CardInfo>
                    <div>
                        <img src={idCard} alt="infoPersonal" />
                        <div>
                            <h3>Informacion Personal</h3>
                            <p>informacion de tu ducumento de indentidad </p>
                        </div>
                        <img src={flecha} alt="flecha" />
                    </div>

                </CardInfo>
                <CardInfo>
                    <div>

                        <img src={infoPersonal} alt="infoPersonal" />
                        <div>
                            <h3>Datos de tu cuenta</h3>
                            <p>Datos  que representan a la cuenta en ShopSwiftly </p>
                        </div>
                        <img src={flecha} alt="flecha" />
                    </div>
                </CardInfo>
                <CardInfo>
                    <div>

                        <img src={creditCard} alt="tarjeta de credito" />
                        <div>
                            <h3>Tarjetas</h3>
                            <p>Tarjetas guardadas en tu cuenta</p>
                        </div>
                        <img src={flecha} alt="flecha" />
                    </div>
                </CardInfo>
                <CardInfo>
                    <div>
                        <img src={map} alt="direcciones" />
                        <div>
                            <h3>Direcciones</h3>
                            <p>Direcciones guardadas en tu cuenta</p>
                        </div>
                        <img src={flecha} alt="flecha" />
                    </div>
                </CardInfo>
            </DatosUser >

        </Main >
    )
}


const Main = styled.main`
    max-width: 100%;
    background-color: #D9D9D9;
    color: black;
    padding: 40px;
    @media (max-width: 640px) {
        padding:0px;
        padding-block: 20px;
    }
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ResumenInfo = styled.section`
height: 150px;
background-color: #fff;;
display: flex;
justify-content: center;
gap: 30px;
align-items: center;

img{
    width: 100px;
    height: 100px;
}
@media (max-width: 640px) {
    img{
        width: 80px;
        height: 80px;
    }
}
`;
const DatosUser = styled.section`
   
    background-color: #fff;
    display: flex;
    flex-direction: column;
 

    @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
        
    }
`;
const CardInfo = styled.div`
    background-color: #fff;
    Width: 100%;
    height: 100px;
    border-color: #D9D9D9;
    border-style: solid;
    display: flex;
    justify-content: center;
    // padding: 20px;
    // padding-left: 200px;
    
    
    @media (max-width: 640px) {
        margin-inline: 0px;
        padding-inline:0px;
    }
    img{
        width: 50px;
        height: 50px;
    } 
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 10px;
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;

        h3{
            font-size: 12px;
            font-weight: 500;
            color: #000;
        }

        p{
            font-size: 10px;
            color: #A6A6A6;
        }
    }
`;