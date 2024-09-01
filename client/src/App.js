import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from "./components/navbar/NavbarApp";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <CartProvider>
      <Navbar />
      <div className="App">
          <AppRoutes />
          <ToastContainer />
      </div>
      </CartProvider>
    </Router>
  );
}

export default App;
