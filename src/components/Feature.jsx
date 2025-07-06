import React from 'react';
import { motion } from 'framer-motion';

// SVG Icons
const AerodynamicIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e64210" strokeWidth="1.5">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg>
);

const CarbonFiberIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0072bc" strokeWidth="1.5">
    <path d="M14 9l-6 6m0-6l6 6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const PrecisionIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#dc3545" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <circle cx="12" cy="9" r="3" fill="#dc3545"/>
  </svg>
);

const SmartIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1.5">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <path d="M12 18h.01"/>
  </svg>
);

const Feature = () => {
  const features = [
    {
      id: 1,
      title: "Aerodynamic Mastery",
      description: "Wind-tunnel optimized frame reduces drag by 27% compared to standard models",
      icon: <AerodynamicIcon />,
      bgClass: "bg-velofy-orange-light"
    },
    {
      id: 2,
      title: "Carbon Fiber Excellence",
      description: "Handcrafted T1000 carbon frame weighing just 790g",
      icon: <CarbonFiberIcon />,
      bgClass: "bg-velofy-blue-light"
    },
    {
      id: 3,
      title: "Precision Engineering",
      description: "Laser-aligned components with ±0.1mm tolerance for perfect power transfer",
      icon: <PrecisionIcon />,
      bgClass: "bg-velofy-red-light"
    },
    {
      id: 4,
      title: "Smart Integration",
      description: "Built-in performance tracking with ANT+/Bluetooth connectivity",
      icon: <SmartIcon />,
      bgClass: "bg-velofy-gray-light"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="feature">
      <style jsx>{`
        .bg-velofy-orange-light {
          background-color: rgba(230, 66, 16, 0.08);
          border-left: 4px solid #e64210;
        }
        .bg-velofy-blue-light {
          background-color: rgba(0, 114, 188, 0.08);
          border-left: 4px solid #0072bc;
        }
        .bg-velofy-red-light {
          background-color: rgba(220, 53, 69, 0.08);
          border-left: 4px solid #dc3545;
        }
        .bg-velofy-gray-light {
          background-color: rgba(44, 62, 80, 0.08);
          border-left: 4px solid #2c3e50;
        }
        .feature-card {
          transition: all 0.3s ease;
          box-shadow: 0 2px 15px rgba(0,0,0,0.05);
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 25px rgba(0,0,0,0.1);
        }
      `}</style>
      
      <div className="container">
        <div className="fearure-work">
          <section className="feature-section">
            <div className="deals-header">
              <div className="col-lg-12">
                <h1 className="about-title display-5 fw-bold mb-2" style={{color:"#2c3e50",textAlign:"center",fontSize:"57px"}}>
                  <span style={{color :"#e64210"}}>VELOFY  </span> FEATURES</h1>
              </div>
              <p className="deals-subtitle">Where cutting-edge engineering meets cycling perfection</p>
            </div>

            <motion.div 
              className="row g-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature) => (
                <motion.div 
                  key={feature.id} 
                  className="col-md-6"
                  variants={item}
                >
                  <div className={`p-4 rounded-3 h-100 feature-card ${feature.bgClass}`}>
                    <div className="d-flex">
                      <div className="me-4">
                        <span className="display-4">{feature.icon}</span>
                      </div>
                      <div>
                        <h3 className="h4 fw-bold mb-3">{feature.title}</h3>
                        <p className="mb-0">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="text-center mt-5">
              <button className="btn btn-lg btn-dark rounded-pill px-4 py-3" style={{backgroundColor: "#e64210", borderColor: "#e64210"}}>
                Connect Now<i className="fas fa-arrow-right ms-2"></i>
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Feature;