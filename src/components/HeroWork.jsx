import React from 'react';
import { motion } from 'framer-motion';

const HeroWork = () => {
    const images = [
        "/images/herowork (6).png",
        "/images/herowork (4).png",
        "/images/herowork (7).png",
        "/images/herowork (5).png",
        "/images/herowork (4).png",
        "/images/herowork (6).png",
        "/images/herowork (7).png",
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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

    const slideVariants = {
        initial: { x: 0 },
        animate: {
            x: "-50%",
            transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
            transition: {
                duration: 0.3,
                yoyo: Infinity
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <>
            <section className="hero">
                <div className="container">
                    <motion.div 
                        className="hero-work"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <div className='row'>
                            <div className='col-md-12'>
                                <motion.div className='heading text-center' variants={itemVariants}>
                                    <motion.h1 
                                        className="animated-heading"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        Powering Compliance from Start to Finish
                                    </motion.h1>
                                    <motion.button 
                                        className="herwork-button"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        Get Started
                                    </motion.button>
                                </motion.div>
                                <div className='col-md-12'>
                                    <div className="slider">
                                        <motion.div 
                                            className="slide-track"
                                            variants={slideVariants}
                                            initial="initial"
                                            animate="animate"
                                        >
                                            {images.concat(images).map((img, index) => (
                                                <motion.div 
                                                    className="slide" 
                                                    key={index}
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <img
                                                        src={img}
                                                        height="100"
                                                        width="250"
                                                        alt="Bicycle Brand"
                                                        onError={(e) => {
                                                            e.target.src = "/images/fallback.png"; 
                                                        }}
                                                    />
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default HeroWork;