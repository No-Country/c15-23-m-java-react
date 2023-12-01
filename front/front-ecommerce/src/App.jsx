import { Footer } from "./components/Footer/Footer";
import { FormIcioSecion } from "./components/FormInicioSecion";
import { Navbar } from "./components/Navbar/Navbar";
import Volver from "./components/Volver/Volver";
import { Checkout } from "./pages/Checkout";
import NotFound from "./pages/NotFound/NotFound.jsx";
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
      <NotFound />
      <br />
      <Footer />
    </>
  );
}

export default App;
