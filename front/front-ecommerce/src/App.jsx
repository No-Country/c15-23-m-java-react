import { Footer } from "./components/Footer/Footer";
import { FormIcioSecion } from "./components/FormInicioSecion";
import { Navbar } from "./components/Navbar/Navbar";
import Volver from "./components/Volver/Volver";
import { Checkout } from "./pages/Checkout";
import { SuccessfulPurchase } from "./pages/SuccessfulPurchase";
import SignUp from './components/SignUp/SignUp'

function App() {

  return (
    <>
      <Navbar />
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
      <br />
      <Footer />
    </>
  );
}

export default App;
