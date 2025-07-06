import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: "facebook-f", url: "#" },
    { icon: "twitter", url: "#" },
    { icon: "instagram", url: "#" },
    { icon: "youtube", url: "#" }
  ];

  const navLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Deals", url: "#deals" },
    { name: "Features", url: "#features" },
  ];

  return (
    <footer
      className="text-white pt-5 pb-4"
      style={{
        background: "linear-gradient(90deg, #e64210, #dd8a0c)",
        marginTop: "50px",
      }}
    >
      <div className="container">
        <div className="row g-4">

          {/* Logo and Tagline */}
          <div className="col-md-4 col-lg-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="d-inline-block"
            >
              <h2 className="fw-bold mb-3">Velofy
              </h2>
            </motion.div>
            <p className="small mb-0">
              Ride smart, glide free. Velofy is your ultimate companion for smooth city rides and unbeatable deals.
            </p>
          </div>

          {/* Navigation Links - Single Column */}
          <div className="col-md-4 col-lg-4">
            <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled mb-4">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mb-2"
                >
                  <a 
                    href={link.url} 
                    className="text-white text-decoration-none"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="col-md-4 col-lg-4">
            <h5 className="text-uppercase fw-bold mb-3" style={{marginLeft:"6px"}}>Contact</h5>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i>Karachi, Pakistan
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope me-2"></i>support@velofy.com
              </li>
              <li className="mb-3">
                <i className="fas fa-phone me-2"></i>+92 300 1234567
              </li>
            </ul>

            <div className="social-icons">
              <ul className="list-unstyled d-flex gap-3 mb-0">
                {socialLinks.map((social, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a 
                      href={social.url} 
                      className="text-white"
                    >
                      <i className={`fab fa-${social.icon} fa-lg`}></i>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-4 border-white opacity-25" />

        <div className="text-center small">
          © {new Date().getFullYear()} <strong>Velofy</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;