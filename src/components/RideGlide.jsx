import React from "react";
import { motion } from "framer-motion";

const RideGlide = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 20px rgba(230, 66, 16, 0.5)",
      transition: {
        duration: 0.3,
        yoyo: 3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const imageOverlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.3,
      transition: {
        duration: 1.5
      }
    }
  };

  return (
    <>
      <section className="ride">
        <div className="container">
          <div className="rideglide-work">
            <section className="rideglide-section my-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 position-relative p-0">
                    <motion.div 
                      className="position-absolute top-50 start-50 translate-middle text-center w-100 px-3 mt-4 z-index-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      variants={containerVariants}
                    >
                      <motion.h1 
                        className="display-2 fw-bold mb-3" 
                        style={{ color: 'white', textShadow: '2px 2px 8px rgba(0,0,0,0.8)', letterSpacing: '1.5px'}}
                        variants={textVariants}
                      >
                        RIDE GLIDE JOURNEY
                      </motion.h1>
                      <motion.p 
                        className="h4 text-light d-none d-md-block mb-4" 
                        style={{textShadow: '1px 1px 4px rgba(0,0,0,0.6)', fontStyle: 'italic'}}
                        variants={textVariants}
                      >
                        Premium Cycling Experience
                      </motion.p>
                      <motion.button 
                        className="btn rideglide-btn btn-orange"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        Explore Now
                      </motion.button>
                    </motion.div>
                    <motion.div 
                      className="ride-image position-relative"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
                      <motion.div 
                        className="image-overlay"
                        variants={imageOverlayVariants}
                        initial="hidden"
                        whileInView="visible"
                      ></motion.div>
                      <img 
                        src="/images/rideglide.jpg" 
                        alt="Velofy RideGlide" 
                        className="img-fluid w-100" 
                        style={{ maxHeight: '600px', objectFit: 'cover' }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>    
      </section>
    </>
  );
};

export default RideGlide;