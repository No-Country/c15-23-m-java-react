import { Routes, Route } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home'
const Router = () => {
  return (
    <>
      
       <Routes>
         <Route path="/*" element={<SignUp />} />
         <Route path="login" element={<Login/>} />
         <Route path="sign-up" element={<SignUp/>} />
         <Route path="home" element={<Home/>} /> 
       </Routes>
       
        
    </>
  )
}

export default Router
