import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      setScrollProgress(scroll);

      if (totalScroll > 320) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div 
        className="velofy-scroll-progress" 
        style={{ width: scrollProgress }} 
        aria-hidden="true"
      />

      {/* Floating Back To Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="back-to-top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollProgress;
