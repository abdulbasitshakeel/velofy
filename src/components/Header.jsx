import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaXmark, 
  FaArrowRight, 
  FaCalendarCheck, 
  FaCartShopping 
} from 'react-icons/fa6';
import { useShop } from '../context/ShopContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { 
    cartCount, 
    bookings, 
    setIsCartOpen, 
    setIsBookingsOpen 
  } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'rideglide', 'deals', 'features'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Ride & Glide', href: '#rideglide', id: 'rideglide' },
    { label: 'Hot Deals', href: '#deals', id: 'deals' },
    { label: 'Features', href: '#features', id: 'features' },
  ];

  return (
    <header className={`velofy-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="velofy-nav-card" aria-label="Main Navigation">
          {/* Brand Logo */}
          <a href="#home" className="brand-link" aria-label="Velofy Homepage">
            <img 
              src="/images/logo.png" 
              alt="Velofy Premium Bicycles Logo" 
              className="brand-logo-img"
              width="150"
              height="38"
            />
          </a>

          {/* Desktop Navigation Menu */}
          <ul className="nav-menu-desktop d-none d-lg-flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-item-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action Icons & Button */}
          <div className="d-flex align-items-center gap-2">
            {/* Cart Icon Button with Dynamic Badge */}
            <button
              type="button"
              className="nav-icon-badge-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="View Shopping Cart"
              title="View Cart"
            >
              <FaCartShopping />
              {cartCount > 0 && (
                <span className="nav-badge-count">{cartCount}</span>
              )}
            </button>

            {/* Bookings / Test Rides Icon Button with Dynamic Badge */}
            <button
              type="button"
              className="nav-icon-badge-btn"
              onClick={() => setIsBookingsOpen(true)}
              aria-label="My Test Rides"
              title="My Test Rides"
            >
              <FaCalendarCheck />
              {bookings.length > 0 && (
                <span className="nav-badge-count">{bookings.length}</span>
              )}
            </button>

            {/* "Book Test Ride" CTA */}
            <a 
              href="#contact" 
              className="btn-velofy-primary d-none d-sm-inline-flex" 
              style={{ padding: '8px 20px', fontSize: '0.9rem' }}
            >
              <span>Book Test Ride</span>
              <FaArrowRight />
            </a>

            {/* Mobile Toggle Button */}
            <button
              className="mobile-toggle-btn d-lg-none"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="d-lg-none mobile-menu-drawer"
            >
              <ul className="mobile-menu-list">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className={`nav-item-link ${activeSection === item.id ? 'active' : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.label}</span>
                      <FaArrowRight style={{ fontSize: '0.85rem', opacity: 0.5 }} />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="d-flex gap-2 mt-3 pt-3 border-top">
                <button
                  type="button"
                  className="btn-velofy-outline flex-grow-1 justify-content-center py-2"
                  onClick={() => {
                    setIsOpen(false);
                    setIsCartOpen(true);
                  }}
                >
                  <FaCartShopping />
                  <span>Cart ({cartCount})</span>
                </button>
                <button
                  type="button"
                  className="btn-velofy-outline flex-grow-1 justify-content-center py-2"
                  onClick={() => {
                    setIsOpen(false);
                    setIsBookingsOpen(true);
                  }}
                >
                  <FaCalendarCheck />
                  <span>Rides ({bookings.length})</span>
                </button>
              </div>

              <div className="mt-2">
                <a
                  href="#contact"
                  className="btn-velofy-primary w-100 justify-content-center py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Book Test Ride</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;