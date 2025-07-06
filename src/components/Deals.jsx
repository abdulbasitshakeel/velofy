import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiClock, FiShoppingCart, FiChevronRight } from 'react-icons/fi';

const Deals = () => {
  const [activeTab, setActiveTab] = useState('mountain');

  const deals = {
    mountain: [
      {
        id: 1,
        name: 'Rocky Peak Pro',
        price: 1299,
        originalPrice: 1624,
        discount: 20,
        rating: 4.5,
        timeLeft: '2 days left',
        image: '/images/bicycle.png',
        colors: ['#3a86ff', '#8338ec', '#ff006e']
      },
      {
        id: 2,
        name: 'Trail Blazer XT',
        price: 899,
        originalPrice: 1058,
        discount: 15,
        rating: 4.2,
        timeLeft: '1 day left',
        image: '/images/bicycle.png',
        colors: ['#06d6a0', '#118ab2', '#ef476f']
      }
    ],
    road: [
      {
        id: 3,
        name: 'Speedster Carbon',
        price: 2499,
        originalPrice: 2777,
        discount: 10,
        rating: 4.8,
        timeLeft: '3 days left',
        image: '/images/bicycle.png',
        colors: ['#ffbe0b', '#fb5607', '#ff006e']
      },
      {
        id: 4,
        name: 'Urban Racer Pro',
        price: 1599,
        originalPrice: 2132,
        discount: 25,
        rating: 4.3,
        timeLeft: '6 hours left',
        image: '/images/bicycle.png',
        colors: ['#8338ec', '#3a86ff', '#ff006e']
      }
    ],
    hybrid: [
      {
        id: 5,
        name: 'City Comfort LX',
        price: 749,
        originalPrice: 1070,
        discount: 30,
        rating: 4.1,
        timeLeft: '1 day left',
        image: '/images/bicycle.png',
        colors: ['#06d6a0', '#118ab2', '#073b4c']
      },
      {
        id: 6,
        name: 'Adventure Cross',
        price: 1099,
        originalPrice: 1340,
        discount: 18,
        rating: 4.4,
        timeLeft: '4 days left',
        image: '/images/bicycle.png',
        colors: ['#ffbe0b', '#fb5607', '#8338ec']
      }
    ]
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    active: {
      backgroundColor: "#e64210",
      color: "white",
      transition: { duration: 0.2 }
    }
  };

  const bikeCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#d63a0f",
      boxShadow: "0 5px 15px rgba(230, 66, 16, 0.4)",
      transition: {
        duration: 0.3,
        yoyo: 2
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <>
      <section className="deals">
        <div className="container">
          <div className="deals">
            <motion.div 
              className="about-section"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              <div className="deals-header">
                <div className="col-lg-12">
                  <motion.h1 
                    className="about-title display-5 fw-bold mb-2" 
                    style={{color:"#2c3e50",textAlign:"center",fontSize:"57px"}}
                    variants={itemVariants}
                  >
                    <span style={{color :"#e64210"}}>Hot </span> Bicycles Deals
                  </motion.h1>
                </div>
                <motion.p 
                  className="deals-subtitle"
                  variants={itemVariants}
                >
                  Limited time offers with exclusive discounts
                </motion.p>
              </div>
              
              <motion.div 
                className="tabs-container"
                variants={containerVariants}
              >
                {Object.keys(deals).map((tab) => (
                  <motion.button
                    key={tab}
                    className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                    variants={tabVariants}
                    whileHover="hover"
                    animate={activeTab === tab ? "active" : ""}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)} Bikes
                    <FiChevronRight className="tab-icon" />
                  </motion.button>
                ))}
              </motion.div>
              
              <motion.div 
                className="deals-grid"
                variants={containerVariants}
              >
                <AnimatePresence mode="wait">
                  {deals[activeTab].map(bike => (
                    <motion.div 
                      key={bike.id} 
                      className="bike-card"
                      variants={bikeCardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      layout
                    >
                      <div className="card-badges">
                        <motion.span 
                          className="discount-badge"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring" }}
                        >
                          -{bike.discount}%
                        </motion.span>
                        <motion.span 
                          className="time-badge"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <FiClock className="icon" /> {bike.timeLeft}
                        </motion.span>
                      </div>
                      
                      <div className="bike-image-container">
                        <motion.img 
                          src={bike.image} 
                          alt={bike.name} 
                          className="bike-image" 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                        <motion.div 
                          className="color-options"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {bike.colors.map((color, i) => (
                            <motion.span 
                              key={i} 
                              className="color-dot" 
                              style={{ backgroundColor: color }}
                              whileHover={{ scale: 1.2 }}
                              transition={{ type: "spring" }}
                            />
                          ))}
                        </motion.div>
                      </div>
                      
                      <div className="bike-info">
                        <h3>{bike.name}</h3>
                        
                        <div className="rating">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.2 }}
                            >
                              <FiStar 
                                className={`star ${i < Math.floor(bike.rating) ? 'filled' : ''} ${i === Math.floor(bike.rating) && bike.rating % 1 > 0 ? 'half-filled' : ''}`}
                              />
                            </motion.div>
                          ))}
                          <span>({bike.rating})</span>
                        </div>
                        
                        <div className="price-container">
                          <span className="current-price">${bike.price}</span>
                          <span className="original-price">${bike.originalPrice}</span>
                        </div>
                        
                        <motion.button 
                          className="view-deal-btn"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <FiShoppingCart className="cart-icon" /> Get Bicycle
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deals;