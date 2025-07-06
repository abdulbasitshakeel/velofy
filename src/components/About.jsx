import React from "react";
import { motion } from "framer-motion";

const About = () => {
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

  const itemVariants = {
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

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(230, 66, 16, 0.3)",
      transition: {
        duration: 0.3,
        yoyo: 3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <>
      <section className="about">
        <div className="container">
          <motion.div 
            className="about-work"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <section className="about-section my-3">
              <div className="row">
                <div className="col-lg-12">
                  <motion.h1 
                    className="about-title display-5 fw-bold mb-4" 
                    style={{color:"#2c3e50",textAlign:"center",fontSize:"57px"}}
                    variants={itemVariants}
                  >
                    <span style={{color :"#e64210"}}>Who </span>We Are
                  </motion.h1>
                </div>
                
                <div className="col-lg-6">
                  <motion.div 
                    className="about-image"
                    variants={imageVariants}
                  >
                    <img src="/images/about.png" alt="About Velofy" />
                  </motion.div>
                </div>
                
                <div className="col-lg-6">
                  <motion.div 
                    className="about-content"
                    variants={containerVariants}
                  >
                    <motion.p 
                      className="about-text lead"
                      variants={itemVariants}
                    >
                      Velofy is a forward-thinking company dedicated to revolutionizing the way people move. 
                      We combine innovative technology with sustainable solutions to create transportation 
                      options that are efficient, eco-friendly, and accessible to everyone.
                    </motion.p>
                    
                    <motion.p 
                      className="about-text lead"
                      variants={itemVariants}
                    >
                      Our team of passionate professionals works tirelessly to develop cutting-edge 
                      mobility solutions that reduce carbon footprints while enhancing urban 
                      transportation experiences.
                    </motion.p>
                    
                    <motion.button 
                      className="btn about-btn btn-orange mt-1"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </section>    
          </motion.div>
        </div>    
      </section>
    </>
  );
};

export default About;