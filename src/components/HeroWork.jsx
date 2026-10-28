import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaArrowRight, 
  FaBolt, 
  FaBicycle, 
  FaSliders, 
  FaAward, 
  FaShieldHalved, 
  FaWind, 
  FaBatteryFull, 
  FaMicrochip, 
  FaTrophy, 
  FaStar 
} from 'react-icons/fa6';

const HeroWork = () => {
  // Marquee innovation highlights with Font Awesome icons
  const marqueeItems = [
    { text: "TORAY T1000 HIGH-MODULUS CARBON", icon: <FaBicycle /> },
    { text: "SHIMANO DURA-ACE Di2 ELECTRONIC SHIFT", icon: <FaBolt /> },
    { text: "120KM ULTRA-ENDURANCE RANGE", icon: <FaBatteryFull /> },
    { text: "INTEGRATED SMART IoT TELEMETRY", icon: <FaMicrochip /> },
    { text: "HYDRAULIC 4-PISTON DISC BRAKES", icon: <FaShieldHalved /> },
    { text: "WIND-TUNNEL VALIDATED AERO PROFILE", icon: <FaWind /> },
    { text: "WORLD TOUR CERTIFIED GEOMETRY", icon: <FaTrophy /> },
    { text: "LIFETIME CARBON FRAME WARRANTY", icon: <FaAward /> },
  ];

  return (
    <section className="hero-wrapper" id="home">
      {/* Background ambient lighting */}
      <div className="hero-glow-blob" aria-hidden="true"></div>

      <div className="container">
        <div className="hero-content">
          {/* Main Hero Headline - No Pill */}
          <motion.h1
            className="hero-main-title mt-2"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Engineered For Speed. <br />
            <span className="gradient-text">Built For The Unstoppable.</span>
          </motion.h1>

          {/* Subtitle / Value Proposition */}
          <motion.p
            className="hero-lead-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Velofy combines hand-laid Toray T1000 carbon fiber, aerodynamic micro-precision,
            and smart IoT connectivity to give you effortless speed, all-day comfort, and unmatched road dominance.
          </motion.p>

          {/* CTA Buttons Group with Font Awesome Icons */}
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <a href="#deals" className="btn-velofy-primary">
              <span>Explore Hot Deals</span>
              <FaArrowRight />
            </a>
            <a href="#about" className="btn-velofy-outline">
              <FaSliders />
              <span>Discover Velofy Tech</span>
            </a>
          </motion.div>

          {/* Hero Showcase Image with Floating Specs */}
          <motion.div
            className="hero-image-stage"
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/images/hero-bike.jpg"
              alt="Velofy Flagship Aerodynamic Performance Carbon Road Bicycle"
              className="hero-display-img"
              width="1050"
              height="590"
              loading="eager"
            />

            {/* Floating Left Spec Badge */}
            <motion.div
              className="floating-spec-card card-left d-none d-md-flex"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="spec-icon-box">
                <FaBolt />
              </div>
              <div className="text-start">
                <div className="spec-text-val">7.2 KG</div>
                <div className="spec-text-lbl">Toray T1000 Carbon</div>
              </div>
            </motion.div>

            {/* Floating Right Spec Badge */}
            <motion.div
              className="floating-spec-card card-right d-none d-md-flex"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="spec-icon-box" style={{ background: 'linear-gradient(135deg, #F59E0B, #FF5722)' }}>
                <FaAward />
              </div>
              <div className="text-start">
                <div className="spec-text-val">120 KM</div>
                <div className="spec-text-lbl">Extended Range Assist</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Metrics Bar */}
          <div className="hero-stats-row">
            <div className="row g-3">
              <div className="col-6 col-md-3">
                <div className="stat-item">
                  <div className="stat-num">25K+</div>
                  <div className="stat-label">Active Riders</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-item">
                  <div className="stat-num">7.2kg</div>
                  <div className="stat-label">Frame Featherweight</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-item">
                  <div className="stat-num">99.8%</div>
                  <div className="stat-label">Build Reliability</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-item">
                  <div className="stat-num">4.9★</div>
                  <div className="stat-label">Global Rider Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Silky Continuous Infinite Marquee Ticker with Font Awesome Icons */}
      <div className="marquee-section mt-5" aria-label="Technology Highlights">
        <div className="marquee-container">
          <div className="marquee-track">
            {marqueeItems.concat(marqueeItems).map((item, index) => (
              <div key={index} className="marquee-badge">
                <span style={{ color: '#FF5722' }}>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWork;