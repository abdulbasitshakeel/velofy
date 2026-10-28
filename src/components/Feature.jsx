import React from 'react';
import { motion } from 'framer-motion';
import {
  FaWind,
  FaLayerGroup,
  FaCrosshairs,
  FaWifi,
  FaShieldHalved,
  FaBolt,
  FaGaugeHigh,
  FaHeadset,
  FaArrowRight
} from 'react-icons/fa6';

const Feature = () => {
  const featuresList = [
    {
      id: 1,
      icon: <FaWind />,
      title: "Wind-Tunnel Aero Sculpting",
      desc: "NACA airfoil tube profiles engineered and validated in sub-sonic wind tunnels, reducing aerodynamic drag by 28.4% at 45 km/h.",
    },
    {
      id: 2,
      icon: <FaLayerGroup />,
      title: "Toray T1000 Carbon Weave",
      desc: "Handcrafted aerospace-grade carbon prepreg delivering a featherweight 790g frame while resisting extreme torsional sprinting forces.",
    },
    {
      id: 3,
      icon: <FaCrosshairs />,
      title: "Laser-Toleranced Geometry",
      desc: "Laser-measured bottom bracket shells and thru-axle dropouts with ±0.05mm tolerance guarantee zero friction and instant acceleration.",
    },
    {
      id: 4,
      icon: <FaWifi />,
      title: "Velofy Smart IoT Telemetry",
      desc: "Real-time cadence, gradient sensor, wattage monitoring, and satellite GPS anti-theft geofencing synced straight to your smartphone.",
    },
    {
      id: 5,
      icon: <FaShieldHalved />,
      title: "4-Piston Hydraulic Braking",
      desc: "Thermal-finned IceTech ceramic pistons provide surgical brake modulation and zero brake fade on steep alpine descents.",
    },
    {
      id: 6,
      icon: <FaBolt />,
      title: "Rapid Magnetic Fast-Charge",
      desc: "High-density lithium smart cells integrated seamlessly into the downtube, achieving 80% capacity in just 60 minutes.",
    },
    {
      id: 7,
      icon: <FaGaugeHigh />,
      title: "Di2 Electronic Precision Shifting",
      desc: "Shimano Dura-Ace Di2 wireless 12-speed drivetrain delivers lightning-fast, whisper-quiet gear changes under full sprint load.",
    },
    {
      id: 8,
      icon: <FaHeadset />,
      title: "Pro Fit & Lifetime Support",
      desc: "3D motion-capture bike fitting, lifetime carbon frame warranty, and 24/7 concierge service keep you riding at your peak.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="features-section-wrapper" id="features">
      <div className="container">
        {/* Header - No Pill */}
        <div className="text-center">
          <h2 className="section-title">
            Engineered For The <span className="text-orange">Podium</span>
          </h2>
          <p className="section-subtitle">
            Every millimeter of a Velofy bicycle is crafted with obsessive attention to speed,
            weight savings, and intelligent rider connectivity.
          </p>
        </div>

        {/* Features 6-Card Grid with Font Awesome */}
        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {featuresList.map((f) => (
            <motion.article
              key={f.id}
              className="velofy-feature-card"
              variants={itemVariants}
            >
              <div className="feature-icon-bubble">{f.icon}</div>
              <h3 className="feature-card-title">{f.title}</h3>
              <p className="feature-card-desc">{f.desc}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Feature Action CTA */}
        <div className="text-center mt-5 pt-3">
          <a href="#contact" className="btn-velofy-primary">
            <span>Schedule Studio Fitting Session</span>
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Feature;