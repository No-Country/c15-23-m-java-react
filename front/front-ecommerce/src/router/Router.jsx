import { Routes, Route } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home'
import { AddEditProduct } from '../pages/AddEditProduct/AddEditProduct';
 import { NotFound } from '../pages/NotFound/NotFound' 
import { ShoppingCart } from '../pages/ShoppingCart';
import { Checkout } from '../pages/Checkout';
import { SuccessfulPurchase } from '../pages/SuccessfulPurchase';
import { AdminHome } from '../pages/AdminHome';

const Router = () => {
  return (
    <>
       <Routes>
         <Route path="/" element={<SignUp />} />
         <Route path="login" element={<Login/>} />
         <Route path="sign-up" element={<SignUp/>} />
         <Route path="home" element={<Home/>} />
         <Route path="products" element={<AddEditProduct/>} />
         <Route path="/*" element={<NotFound/>} />  
         <Route path="shop" element={<ShoppingCart/>} />
         <Route path="checkout" element={<Checkout/>} />
         <Route path="successfulPurchase" element={<SuccessfulPurchase/>} />
         <Route path="home-admin" element={<AdminHome/>} />
        {/*  Faltan otras Rutas */}

       </Routes>       
    </>
  )
}

export default Router
