import React, { useState } from 'react';
import { 
  FaPaperPlane, 
  FaShieldHalved, 
  FaAward, 
  FaCheck, 
  FaLocationDot, 
  FaEnvelope, 
  FaInstagram, 
  FaStrava, 
  FaYoutube, 
  FaXTwitter, 
  FaFacebookF 
} from 'react-icons/fa6';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  const bikeLinks = [
    { name: "Aero Carbon Road Bikes", href: "#deals" },
    { name: "Enduro Full-Suspension MTBs", href: "#deals" },
    { name: "Smart Urban E-Bikes", href: "#deals" },
    { name: "All-Road Gravel Bicycles", href: "#deals" },
    { name: "Bespoke Custom Builds", href: "#contact" },
  ];

  const supportLinks = [
    { name: "Book Studio Fitting", href: "#contact" },
    { name: "Lifetime Frame Warranty", href: "#features" },
    { name: "Velofy Companion App", href: "#rideglide" },
    { name: "Global Shipping & Delivery", href: "#deals" },
    { name: "Certified Service Centers", href: "#about" },
  ];

  const socials = [
    { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaStrava />, href: "https://strava.com", label: "Strava Club" },
    { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
    { icon: <FaXTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <footer className="velofy-footer" role="contentinfo">
      <div className="container">
        <div className="row g-5">
          {/* Brand & Mission */}
          <div className="col-lg-4 col-md-6">
            {/* Clean Logo Image Badge */}
            <a href="#home" className="d-inline-flex align-items-center bg-white px-3 py-2 rounded-3 mb-3 text-decoration-none" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} aria-label="Velofy Homepage">
              <img
                src="/images/logo.png"
                alt="Velofy Logo"
                style={{ height: 32, width: 'auto', display: 'block' }}
              />
            </a>

            <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.65, marginTop: 10, marginBottom: 18 }}>
              Ride smart, glide free. Velofy is committed to pushing the limits of aerodynamic
              cycling engineering, aerospace composite materials, and zero-carbon urban mobility.
            </p>

            {/* Direct Contact with Font Awesome Icons (No Emojis, No Phone) */}
            <div style={{ color: '#CBD5E1', fontSize: '0.92rem', marginBottom: 20 }} className="d-flex flex-column gap-2">
              <div className="d-flex align-items-center gap-2">
                <FaLocationDot style={{ color: '#F7935B', fontSize: '1rem' }} />
                <span style={{ fontWeight: 600 }}>Pakistan</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaEnvelope style={{ color: '#F7935B', fontSize: '1rem' }} />
                <a 
                  href="mailto:basitshakeel2005@gmail.com" 
                  style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 600 }}
                >
                  basitshakeel2005@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons with Font Awesome */}
            <div className="d-flex gap-2">
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bicycle Collection */}
          <div className="col-lg-2 col-md-6 col-6">
            <h4 className="footer-heading">Bicycles</h4>
            <ul className="footer-nav-list">
              {bikeLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Rider Care & Support */}
          <div className="col-lg-2 col-md-6 col-6">
            <h4 className="footer-heading">Rider Care</h4>
            <ul className="footer-nav-list">
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* VIP Club & Newsletter */}
          <div className="col-lg-4 col-md-6">
            <h4 className="footer-heading">Velofy Newsletter</h4>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: 16 }}>
              Subscribe to receive exclusive bike launch invites, Tour stage insights, and special subscriber discounts.
            </p>

            <form onSubmit={handleSubscribe}>
              <div className="footer-newsletter-box">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="footer-newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="footer-newsletter-btn" aria-label="Subscribe to newsletter">
                  {subscribed ? <FaCheck /> : <FaPaperPlane />}
                </button>
              </div>
            </form>
            {subscribed && (
              <div style={{ color: '#22C55E', fontSize: '0.85rem', marginTop: 8 }}>
                ✓ Welcome to Velofy! Check your inbox.
              </div>
            )}

            <div className="d-flex align-items-center gap-3 mt-4" style={{ color: '#64748B', fontSize: '0.82rem' }}>
              <div className="d-flex align-items-center gap-1">
                <FaShieldHalved style={{ color: '#F7935B' }} />
                <span>30-Day Risk-Free Trial</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <FaAward style={{ color: '#F7935B' }} />
                <span>Lifetime Frame Warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar d-flex flex-column flex-md-row gap-3 text-center text-md-start justify-content-between align-items-center">
          <div>
            © {new Date().getFullYear()} <strong>Velofy Cycling Technologies Inc.</strong> All rights reserved.
          </div>
          
          {/* Developed By Abdul Basit Shakeel Portfolio Link (Positioned on the Right) */}
          <div className="footer-developer-credit text-md-end">
            Developed By{' '}
            <a
              href="https://basit-shakeel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-developer-link"
            >
              Abdul Basit Shakeel
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;