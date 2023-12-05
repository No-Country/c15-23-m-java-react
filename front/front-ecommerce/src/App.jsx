import { Footer } from './components/Footer/Footer';
import { FormIcioSecion } from './components/FormInicioSecion';
import { Navbar } from './components/Navbar/Navbar';
import Volver from './components/Volver/Volver';
import { AdminHome } from './pages/AdminHome';
import { Customers } from './pages/AdminHome/Customers';
import { Products } from './pages/AdminHome/Products';
import { Checkout } from './pages/Checkout';
import NotFound from './pages/NotFound/NotFound.jsx';
import { SuccessfulPurchase } from './pages/SuccessfulPurchase';
import SignUp from './components/SignUp/SignUp';
import { ShoppingCart } from './pages/ShoppingCart';

function App() {
  return (
    <>
      <Navbar />
      <br />
      <ShoppingCart />
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
      <FormIcioSecion />
      <br />
      <SignUp />
      <NotFound />
      <br />
      <Footer />
    </>
  );
}

export default App;
