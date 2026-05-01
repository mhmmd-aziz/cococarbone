import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Contact from '../pages/Contact';

// Import halaman detail produk baru
import Charcoal from '../pages/Charcoal';
import Coconut from '../pages/Coconut';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Rute Detail Produk */}
      <Route path="/products/charcoal" element={<Charcoal />} />
      <Route path="/products/coconut" element={<Coconut />} />
      {/* <Route path="/products/candlenut" element={<Candlenut />} /> */}
    </Routes>
  );
}