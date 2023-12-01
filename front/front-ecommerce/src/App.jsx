import { FormIcioSecion } from "./components/FormInicioSecion";
import { Navbar } from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";
import Volver from "./components/Volver/Volver";
import { Checkout } from "./pages/Checkout";
import { SuccessfulPurchase } from "./pages/SuccessfulPurchase";

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
    </>
  );
}

export default App;
