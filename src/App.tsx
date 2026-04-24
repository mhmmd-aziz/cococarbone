import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp'; // <-- 1. Import tombol WA

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen bg-background">
        <AppRoutes />
      </main>
      <Footer />
      
      {/* 2. Taruh di paling bawah sini biar selalu muncul (karena position fixed) */}
      <FloatingWhatsApp /> 
    </BrowserRouter>
  );
}

export default App;