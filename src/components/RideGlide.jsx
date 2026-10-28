import React from "react";
import { motion } from "framer-motion";
import { 
  FaBolt, 
  FaBatteryFull, 
  FaClock, 
  FaArrowRight 
} from "react-icons/fa6";

const RideGlide = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="rideglide-wrapper" id="rideglide">
      <div className="container">
        <motion.div
          className="rideglide-banner-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {/* Background Cinematic Banner */}
          <img
            src="/images/rideglide-banner.jpg"
            alt="Velofy Ride and Glide Smart Electric Commuter Bicycle at Twilight"
            className="rideglide-bg-img"
            loading="lazy"
            width="1280"
            height="580"
          />

          {/* Deep Contrast Gradient Overlay */}
          <div className="rideglide-gradient-overlay" aria-hidden="true"></div>

          {/* Foreground Content - No Pills */}
          <div className="rideglide-content">
            <h2 className="rideglide-title">
              The Ride & Glide <br />
              <span style={{ color: "#FF7A45" }}>Urban Experience</span>
            </h2>

            <p className="rideglide-desc">
              Transform your daily commute into an effortless thrill. Featuring smart torque-assist sensors
              that instantly match your pedal cadence, an integrated 720Wh ultra-dense battery,
              and illuminated ambient frame lighting for total nighttime confidence.
            </p>

            {/* Micro Specs Grid with Font Awesome */}
            <div className="rideglide-specs-grid">
              <div className="rideglide-spec-box">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <FaBolt style={{ color: '#FF5722' }} />
                  <span className="rideglide-spec-val">85 Nm</span>
                </div>
                <div className="rideglide-spec-lbl">Whisper-Quiet Torque</div>
              </div>
              <div className="rideglide-spec-box">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <FaBatteryFull style={{ color: '#FF5722' }} />
                  <span className="rideglide-spec-val">120 km</span>
                </div>
                <div className="rideglide-spec-lbl">Single Charge Range</div>
              </div>
              <div className="rideglide-spec-box">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <FaClock style={{ color: '#FF5722' }} />
                  <span className="rideglide-spec-val">3.2 hrs</span>
                </div>
                <div className="rideglide-spec-lbl">Rapid Fast-Charge</div>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 flex-wrap">
              <a href="#contact" className="btn-velofy-primary">
                <span>Book Test Glide</span>
                <FaArrowRight />
              </a>
              <a href="#deals" className="btn-velofy-outline-dark">
                <span>View E-Bike Deals</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RideGlide;