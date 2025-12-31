import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#050505]">
        <Navbar />
        <CartDrawer />
        <main>
          <Hero />
          <Products />
          <About />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
