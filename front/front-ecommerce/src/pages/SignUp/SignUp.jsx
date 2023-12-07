import {FormContainerSignUp} from './styles'
import Boton from '../../assets/elementos/Boton'
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  return (
  
       <FormContainerSignUp action="" onSubmit={(e) => {
            e.preventDefault()
        }}>
       
        <h2>Registrate</h2>
        <div>
        <label>Ingrese su nombre</label>
        <br />
        <input type="text" name="name" id="name" />
        <br />
        </div>
        <div>
        <label>Ingrese su e-mail</label>
        <br />
        <input type="email" name="email" id="email" />
        <br />
        </div>
        <div>
        <label>Ingrese su contraseña</label>
        <br />
        <input type="password" name="password" id="password" />
        <br />
        </div>
        <div>
        <label>Confimar contraseña</label>
        <br />
        <input type="password" name="password" id="password" />
        <br />
        </div>
        <div>
           <p>¿Ya tienes una cuenta? Haga click aqúi para iniciar sesión</p>
        </div>
        <NavLink to="/home"><Boton type="submit">
           Registrar
        </Boton></NavLink>
        </FormContainerSignUp>  
  )
}

export default SignUp
