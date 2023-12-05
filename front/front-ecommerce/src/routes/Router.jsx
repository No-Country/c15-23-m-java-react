import { Routes, Route } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';
import { AdminHome } from '../pages/AdminHome/index';
import NotFound from '../pages/NotFound/NotFound'
import { Checkout } from '../pages/Checkout';

const Router = () => {
  return (
    <>
       <Routes>
         <Route path="/sign-up" element={<SignUp/>} />
         <Route path="/home" element />
         <Route path="/login" element />
         <Route path="/admin-home" element={<AdminHome/>} />
         <Route path="/not-found" element={<NotFound/>} />
         <Route path="/profile-user" element />
         <Route path="/checkout" element={<Checkout/>} />
         <Route path="/*" element />
         <Route path="/*" element />
       </Routes>
        
    </>
  )
}

export default Router
