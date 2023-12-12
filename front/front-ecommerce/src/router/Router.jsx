import { Routes, Route } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import { AddEditProduct } from '../pages/AddEditProduct/AddEditProduct';
import { NotFound } from '../pages/NotFound/NotFound'
import { ShoppingCart } from '../pages/ShoppingCart';
import { Checkout } from '../pages/Checkout';
import { SuccessfulPurchase } from '../pages/SuccessfulPurchase';
import { AdminHome } from '../pages/AdminHome';
import { Products } from '../pages/AdminHome/Products';
import { Customers } from '../pages/AdminHome/Customers';
import { PurchaseHistory } from '../pages/PurchaseHistory';
import { UserProfile } from '../pages/User/UserProfile';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='home' element={<Home />} />
        <Route path='products' element={<AddEditProduct />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='shop' element={<ShoppingCart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='successfulPurchase' element={<SuccessfulPurchase />} />
        <Route path='home-admin' element={<AdminHome />} />
        <Route path='home-admin/products' element={<Products />} />
        <Route path='home-admin/customers' element={<Customers />} />
        <Route path='purchase-history' element={<PurchaseHistory />} />
        <Route path='user-profile' element={<UserProfile />} />
        {/*  Faltan otras Rutas */}
      </Routes>
    </>
  );
};

export default Router;
