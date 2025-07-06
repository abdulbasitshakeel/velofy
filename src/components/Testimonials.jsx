import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, Tech Solutions",
      content: "This product completely transformed our workflow. The ease of use and powerful features saved us countless hours of work. Highly recommended!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Marketing Director",
      content: "Exceptional service and support. The team went above and beyond to ensure our success with their platform.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Robert Johnson",
      role: "Product Manager",
      content: "We've seen a significant improvement in our productivity since implementing this solution. It's been a game-changer for our team.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "transperent",
      transition: {
        duration: 0.3
      }
    }
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < rating ? "text-warning" : "text-muted"}>★</span>
    ));
  };

  return (
    <>
        <section className="testimonial">
          <section className="testimonials-section">
              <div className="container">
                  <div className="col-lg-12">
                      <h1 className="testimonials-title display-5 fw-bold mb-2" style={{color:"#2c3e50",textAlign:"center",fontSize:"57px"}}>
                      Client<span style={{color :"#e64210"}}> Testimonial </span> </h1>
                  </div>
                  
                  <motion.div 
                  className="row g-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  >
                  {testimonials.map((testimonial) => (
                      <motion.div 
                      key={testimonial.id}
                      className="col-md-4"
                      variants={cardVariants}
                      whileHover="hover"
                      >
                      <div className="card h-100 border-0 shadow-sm overflow-hidden">
                          <div className="card-body p-4">
                          <div className="mb-3 fs-5">
                              {renderStars(testimonial.rating)}
                          </div>
                          <p className="lead mb-4 position-relative">
                              <i className="fas fa-quote-left text-primary opacity-25 fs-1 position-absolute top-0 start-0 mt-n3"></i>
                              <span className="ps-4 d-block">{testimonial.content}</span>
                          </p>
                          </div>
                          <div className="card-footer bg-white border-0 pt-0 pb-4 px-4">
                          <div className="d-flex align-items-center">
                              <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="rounded-circle me-3"
                              width="60"
                              height="60"
                              style={{objectFit: 'cover'}}
                              />
                              <div>
                              <h5 className="mb-1 fw-bold">{testimonial.name}</h5>
                              <p className="text-muted small mb-0">{testimonial.role}</p>
                              </div>
                          </div>
                          </div>
                          <div className="position-absolute top-0 end-0 m-3">
                          <i className="fas fa-quote-right text-primary opacity-10 fs-1"></i>
                          </div>
                      </div>
                      </motion.div>
                  ))}
                  </motion.div>
              </div>
          </section>
        </section>
    </>
  );
};

export default Testimonials;