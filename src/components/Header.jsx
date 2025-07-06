import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* Logo */}
            <a className="navbar-brand" href="#">
              <img src="/images/logo.png" alt="velofy Logo" />
            </a>

            {/* Toggle Button - Only shows on mobile */}
            <button 
              className="navbar-toggler d-lg-none" 
              type="button" 
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Desktop Menu - Only shows on lg screens and up */}
            <div className="collapse navbar-collapse d-none d-lg-block">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Ride & Glide</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Deals</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Testimonial</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Features</a>
                </li>
              </ul>
              <div className="nav-button">
                <button className="btn btn-primary">Contact</button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Only shows on screens smaller than lg */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="d-lg-none mobile-menu-container"
              style={{
                backgroundColor: 'white',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                borderRadius: '0 0 10px 10px',
                overflow: 'hidden'
              }}
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Ride & Glide</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Deals</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Testimonial</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Features</a>
                </li>
              </ul>
              <div className="nav-button p-3">
                <button className="btn btn-primary w-100">Contact</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .navbar {
          padding-top: 10px;
          margin-top:10px;
        }
        .navbar-toggler {
          border: none;
          outline: none;
        }
        .navbar-toggler:focus {
          box-shadow: none;
        }
        .nav-link {
          padding: 10px 15px;
          color: #333;
        }
        .nav-link.active {
          color: #e64210;
          font-weight: bold;
        }
        .mobile-menu-container {
          position: absolute;
          left: 15px;
          right: 15px;
          z-index: 1000;
        }
      `}</style>
    </header>
  );
};

export default Header;