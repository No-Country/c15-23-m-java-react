import styled from 'styled-components'
import Boton from '../elementos/Boton'

export const FormIcioSecion = () => {

    return (
        <FormInicioSecion action="" onSubmit={(e) => {
            e.preventDefault()
        }}>
            <h2>Incio Secion</h2>
            <div>
                <label htmlFor="usuario">Ingrese su email</label>
                <input
                    type="email"
                    name="usuario"
                    id="usuario" />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    id="password" />
            </div>
            <Boton
                type="submit">
                Ingresar
            </Boton>
        </FormInicioSecion>
    )
}


const FormInicioSecion = styled.form`
    background-color: #97dec5;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
    padding: 20px;
    width: 50%;

    h2 {
        font-weight: 400;
        padding: 10px;
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;

        label {
            padding-bottom: 10px;
        }

        input {
            border: 1px solid #BEBEBE;
            border-radius: 3px;
            height: 45px;
            padding: 0 10px;
        }
    }
`;