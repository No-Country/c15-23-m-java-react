import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import Router from './router/Router';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
