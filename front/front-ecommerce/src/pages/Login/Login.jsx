import {FormContainerSignUp} from '../SignUp/styles'
import Boton from '../../assets/elementos/Boton';

const Login = () => {
  return (
    
      <FormContainerSignUp action="" onSubmit={(e) => {
            e.preventDefault()
        }}>
       
        <h2>Inicia Sesión</h2>
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
           <p>¿No tienes una cuenta? Haga click aqúi para registrarse</p>
        </div>
        <Boton type="submit">
           Ingresar
        </Boton>
        </FormContainerSignUp>  
      
  )
}

export default Login
