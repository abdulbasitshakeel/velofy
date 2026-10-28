import React from 'react';
import "./style/App.css";
import { ShopProvider, useShop } from './context/ShopContext';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import HeroWork from './components/HeroWork';
import About from './components/About';
import RideGlide from './components/RideGlide';
import Deals from './components/Deals';
import Testimonials from './components/Testimonials';
import Feature from './components/Feature';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';
import BookingsModal from './components/BookingsModal';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCircleCheck } from 'react-icons/fa6';

const ToastNotification = () => {
  const { toastMessage } = useShop();
  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="velofy-toast-popup"
        >
          <FaCircleCheck style={{ color: '#22C55E', fontSize: '1.2rem', flexShrink: 0 }} />
          <span>{toastMessage}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const AppContent = () => {
  return (
    <div className="velofy-app-wrapper">
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <HeroWork />
        <About />
        <RideGlide />
        <Deals />
        <Testimonials />
        <Feature />
        <Contact />
      </main>
      <Footer />

      {/* Interactive Modals & Toast */}
      <CartModal />
      <CheckoutModal />
      <BookingsModal />
      <ToastNotification />
    </div>
  );
};

const App = () => {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
};

export default App;
