import React from "react";
import { motion } from "framer-motion";
import {
  FaCircleCheck,
  FaFeatherPointed,
  FaMicrochip,
  FaLeaf,
  FaArrowRight
} from "react-icons/fa6";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const pillars = [
    {
      icon: <FaFeatherPointed />,
      title: "Aerodynamic Toray T1000 Carbon",
      desc: "Precision-laid composite weaves delivering unmatched lateral stiffness and absorbing 38% more micro-vibrations for all-day comfort.",
    },
    {
      icon: <FaMicrochip />,
      title: "Intelligent Smart Telemetry",
      desc: "Real-time biometric pacing, integrated GPS anti-theft tracking, and seamless Bluetooth/ANT+ connectivity through the Velofy Companion App.",
    },
  ];

  return (
    <section className="about-section-wrapper" id="about">
      <div className="container">
        <motion.div
          className="about-card-canvas"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <div className="row g-5 align-items-center">
            {/* Left Column: Authentic Action Photo */}
            <div className="col-lg-6">
              <motion.div className="about-image-wrapper" variants={itemVariants}>
                <img
                  src="/images/about-rider.jpg"
                  alt="Velofy Professional Rider on Carbon Bicycle at Sunrise"
                  loading="lazy"
                  width="600"
                  height="480"
                />
                <div className="about-floating-chip">
                  <FaCircleCheck style={{ color: "#FF5722", fontSize: "1.4rem" }} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "0.95rem" }}>World Tour Grade</div>
                    <div style={{ fontSize: "0.78rem", color: "#94A3B8" }}>Tested over 50,000+ Kilometers</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Inspiring Copy & Core Pillars - No Pills */}
            <div className="col-lg-6">
              <motion.div variants={itemVariants}>
                <h2 className="section-title">
                  Crafting The Future Of <br />
                  <span className="text-orange">Two-Wheeled Innovation</span>
                </h2>
                <p className="lead text-muted" style={{ fontSize: "1.05rem", color: "#334155" }}>
                  At Velofy, cycling is more than getting from A to B — it’s about effortless speed, precision, and pushing boundaries.
                </p>

                {/* Feature Pillars with Font Awesome */}
                <div className="about-feature-list">
                  {pillars.map((pillar, idx) => (
                    <div key={idx} className="about-feature-item">
                      <div className="about-feature-icon">{pillar.icon}</div>
                      <div>
                        <h3 className="about-feature-title">{pillar.title}</h3>
                        <p className="about-feature-desc">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-2">
                  <a href="#features" className="btn-velofy-primary">
                    <span>Explore Velofy Engineering</span>
                    <FaArrowRight />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;