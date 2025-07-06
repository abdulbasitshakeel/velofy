import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="contact">
      <style jsx>{`
        .contact-section {
          background: rgba(255, 107, 0, 0.05);
        }
        .form-control:focus {
          border-color: #e64210;
          box-shadow: 0 0 0 0.25rem rgba(230, 66, 16, 0.25);
        }
        .bicycle-selector .form-check-input:checked {
          background-color: #e64210;
          border-color: #e64210;
        }
        .submit-btn {
          background: #e64210;
          border: none;
          padding: 12px 30px;
          transition: all 0.3s;
        }
        .submit-btn:hover {
          background: #c5370d;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="container">
        <section className="contact-section py-5 rounded-4 overflow-hidden">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-5"
              >
                <h2 className="display-5 fw-bold mb-3" style={{ color: "#2c3e50" }}>
                   Contact
                </h2>
                <p className="lead text-muted">
                  Get in touch about our high-performance bicycles
                </p>
              </motion.div>

              <motion.form
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="px-4 px-md-5"
              >
                <div className="row g-4">
                  <motion.div className="col-md-6" variants={itemVariants}>
                    <label htmlFor="name" className="form-label fw-bold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control py-3"
                      id="name"
                      placeholder="Alex Johnson"
                    />
                  </motion.div>
                  <motion.div className="col-md-6" variants={itemVariants}>
                    <label htmlFor="email" className="form-label fw-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control py-3"
                      id="email"
                      placeholder="alex@example.com"
                    />
                  </motion.div>
                  <motion.div className="col-md-6" variants={itemVariants}>
                    <label htmlFor="phone" className="form-label fw-bold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control py-3"
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                    />
                  </motion.div>
                  <motion.div className="col-md-6" variants={itemVariants}>
                    <label className="form-label fw-bold">
                      Interested In
                    </label>
                    <select className="form-select py-3">
                      <option>Select bicycle type</option>
                      <option>Road Bikes</option>
                      <option>Mountain Bikes</option>
                      <option>Hybrid Bikes</option>
                      <option>Electric Bikes</option>
                      <option>Custom Builds</option>
                    </select>
                  </motion.div>
                  <motion.div className="col-12" variants={itemVariants}>
                    <label className="form-label fw-bold mb-3">
                      Specific Model Interest
                    </label>
                    <div className="bicycle-selector row g-3">
                      {['Velo R1', 'Carbon Pro X', 'Trail Master', 'Urban Glide', 'E-Power Plus'].map((model, i) => (
                        <div key={i} className="col-6 col-md-4 col-lg-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="bicycleModel"
                              id={`model-${i}`}
                            />
                            <label className="form-check-label" htmlFor={`model-${i}`}>
                              {model}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div className="col-12" variants={itemVariants}>
                    <label htmlFor="message" className="form-label fw-bold">
                      Your Message
                    </label>
                    <textarea
                      className="form-control py-3"
                      id="message"
                      rows="4"
                      placeholder="Tell us about your cycling needs..."
                    ></textarea>
                  </motion.div>
                  <motion.div 
                    className="col-12 text-center mt-4"
                    variants={itemVariants}
                  >
                    <button
                      type="submit"
                      className="btn submit-btn btn-lg text-white rounded-pill fw-bold"
                    >
                      Send Inquiry <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                  </motion.div>
                </div>
              </motion.form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;