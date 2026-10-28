import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLocationDot, 
  FaEnvelope, 
  FaPaperPlane, 
  FaCircleCheck,
  FaCalendarCheck 
} from 'react-icons/fa6';
import { useShop } from '../context/ShopContext';

const Contact = () => {
  const { addBooking, setIsBookingsOpen } = useShop();
  const [selectedModel, setSelectedModel] = useState('Velofy Aero Carbon Pro');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: '',
  });

  const bikeModels = [
    'Velofy Aero Carbon Pro',
    'TrailMaster Carbon XT',
    'Glide-E Smart Commuter',
    'Explorer Carbon GRX',
    'Custom Bespoke Build',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking({
      name: formData.name,
      email: formData.email,
      date: formData.date || new Date().toISOString().split('T')[0],
      model: selectedModel,
      message: formData.message,
    });
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', date: '', message: '' });
  };

  return (
    <section className="contact-section-wrapper" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="section-title">
            Book A Test Ride & <span className="text-orange">Connect</span>
          </h2>
          <p className="section-subtitle">
            Feel the featherweight carbon frame and surgical handling firsthand.
            Schedule a complimentary fitting session or contact us directly.
          </p>
        </div>

        {/* Contact Canvas */}
        <div className="contact-card-canvas">
          <div className="row g-5 align-items-center">
            {/* Left Column: Direct Info with Font Awesome Icons */}
            <div className="col-lg-5">
              <div className="contact-info-panel">
                <div>
                  <h3 style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.8rem', marginBottom: '14px' }}>
                    Contact Velofy
                  </h3>
                  <p style={{ color: '#CBD5E1', fontSize: '0.98rem', marginBottom: '32px', lineHeight: 1.6 }}>
                    Have questions about our bicycles, sizing, custom orders, or want to test ride? Get in touch with us anytime.
                  </p>

                  {/* Location - Font Awesome */}
                  <div className="contact-method-item">
                    <div className="contact-method-icon">
                      <FaLocationDot />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Location</div>
                      <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1.15rem' }}>Pakistan</div>
                    </div>
                  </div>

                  {/* Email - Font Awesome */}
                  <div className="contact-method-item">
                    <div className="contact-method-icon">
                      <FaEnvelope />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Email Support</div>
                      <a 
                        href="mailto:basitshakeel2005@gmail.com" 
                        style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1.05rem', textDecoration: 'none', wordBreak: 'break-all' }}
                      >
                        basitshakeel2005@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-3 mt-4 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div style={{ fontSize: '0.88rem', color: '#CBD5E1' }}>
                    <strong style={{ color: '#F7935B' }}>Direct Inquiry:</strong> Email us at <a href="mailto:basitshakeel2005@gmail.com" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>basitshakeel2005@gmail.com</a> for fast, personalized assistance.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking Form */}
            <div className="col-lg-7">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-5 text-center h-100 d-flex flex-column align-items-center justify-content-center"
                  >
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: '50%',
                        background: 'rgba(34, 197, 94, 0.12)',
                        color: '#22C55E',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.4rem',
                        marginBottom: 20,
                      }}
                    >
                      <FaCircleCheck />
                    </div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 12, color: '#0F172A' }}>
                      Test Ride Booked Successfully!
                    </h3>
                    <p style={{ color: '#64748B', maxWidth: 440, marginBottom: 28, fontSize: '0.95rem' }}>
                      Thank you, <strong>{formData.name || 'Rider'}</strong>. We have received your booking and will email you at <strong>{formData.email}</strong> to confirm your ride on the <strong>{selectedModel}</strong>.
                    </p>
                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                      <button
                        type="button"
                        className="btn-velofy-primary"
                        onClick={() => setIsBookingsOpen(true)}
                        style={{ padding: '10px 24px', fontSize: '0.95rem' }}
                      >
                        <FaCalendarCheck />
                        <span>View My Test Rides</span>
                      </button>
                      <button
                        type="button"
                        className="btn-velofy-outline"
                        onClick={handleReset}
                        style={{ color: '#0F172A', background: '#FFFFFF', borderColor: '#E2E8F0', padding: '10px 24px' }}
                      >
                        Book Another Ride
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="row g-4">
                      {/* Name */}
                      <div className="col-md-6">
                        <label className="form-floating-label" htmlFor="fullName">Full Name</label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          className="velofy-form-control"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      {/* Email */}
                      <div className="col-md-6">
                        <label className="form-floating-label" htmlFor="emailAddress">Email Address</label>
                        <input
                          id="emailAddress"
                          type="email"
                          required
                          className="velofy-form-control"
                          placeholder="rider@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      {/* Preferred Date */}
                      <div className="col-12">
                        <label className="form-floating-label" htmlFor="rideDate">Preferred Test Ride Date</label>
                        <input
                          id="rideDate"
                          type="date"
                          required
                          className="velofy-form-control"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>

                      {/* Bike Model Selector */}
                      <div className="col-12">
                        <label className="form-floating-label" htmlFor="bikeModelSelect">
                          Select Bicycle Model
                        </label>
                        <select
                          id="bikeModelSelect"
                          className="velofy-form-control"
                          value={selectedModel}
                          onChange={(e) => setSelectedModel(e.target.value)}
                          style={{ cursor: 'pointer' }}
                        >
                          {bikeModels.map((model) => (
                            <option key={model} value={model}>
                              {model}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message / Rider Notes */}
                      <div className="col-12">
                        <label className="form-floating-label" htmlFor="riderNotes">
                          Rider Height / Sizing Notes (Optional)
                        </label>
                        <textarea
                          id="riderNotes"
                          rows="3"
                          className="velofy-form-control"
                          placeholder="Your height, preferred saddle type, or questions..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>

                      {/* Submit */}
                      <div className="col-12">
                        <button type="submit" className="btn-velofy-primary w-100 justify-content-center py-3">
                          <FaPaperPlane />
                          <span>Confirm & Book Complimentary Test Ride</span>
                        </button>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;