import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

import { Toaster } from "react-hot-toast";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
