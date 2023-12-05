import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import Login from './pages/Login/Login'
import Volver from './components/Volver/Volver';
import { AdminHome } from './pages/AdminHome';
import { Customers } from './pages/AdminHome/Customers';
import { Products } from './pages/AdminHome/Products';
import { Checkout } from './pages/Checkout';
import Home from './pages/Home/Home.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import { SuccessfulPurchase } from './pages/SuccessfulPurchase';
import { ShoppingCart } from './pages/ShoppingCart';
import SignUp from './pages/SignUp/SignUp'

function App() {
  return (
    <>
      <Navbar />
      <br />
      <ShoppingCart />
      <Home />

      <AdminHome />
      <br />
      <Products />
      <br />
      <Customers />
      <br />
      <Volver />
      <br />
      <Checkout />
      <br />
      <SuccessfulPurchase />
      <br />
      <Login />
      <br />
      <SignUp />
      <NotFound />
      <br />
      <Footer />
    </>
  );
}

export default App;
