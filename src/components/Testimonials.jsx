import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaCircleCheck, 
  FaQuoteLeft 
} from 'react-icons/fa6';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marcus Vance",
      role: "Pro Endurance Cyclist & Gran Fondo Winner",
      bikeModel: "Velofy Aero Carbon Pro SL",
      content: "The Aero Carbon Pro shaved 6 minutes off my coastal time trial. The power transfer through the oversized bottom bracket is unreal — it literally leaps forward the moment you stand on the pedals.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Elena Rostova",
      role: "Urban Architect & Daily Commuter",
      bikeModel: "Velofy Glide-E Smart Commuter",
      content: "Commuting 24 miles daily across hills used to be exhausting. The Velofy Glide-E turned my morning ride into the highlight of my day. The belt drive is whisper-silent, grease-free, and the battery lasts all week.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Alpine Enduro & Singletrack Guide",
      bikeModel: "Velofy TrailMaster Carbon XT",
      content: "The TrailMaster handles brutal alpine rock drops and steep chutes with absolute poise. The carbon suspension linkage feels bottomless, yet it pedals up technical climbs like a cross-country goat.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section className="testimonials-section-wrapper" id="testimonials">
      <div className="container">
        {/* Section Header - No Pill */}
        <div className="text-center">
          <h2 className="section-title">
            Loved By Riders <span className="text-orange">Worldwide</span>
          </h2>
          <p className="section-subtitle">
            From World Tour athletes to daily city explorers, hear what happens when you
            experience the speed, precision, and soul of Velofy.
          </p>
        </div>

        {/* 3-Card Grid */}
        <motion.div
          className="row g-4 mt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t) => (
            <motion.div key={t.id} className="col-lg-4 col-md-6" variants={cardVariants}>
              <div className="testimonial-card">
                <div>
                  {/* Rating Stars & Quote Icon with Font Awesome */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-1" style={{ color: "#F59E0B" }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <FaQuoteLeft className="testimonial-quote-icon" />
                  </div>

                  <p className="testimonial-quote-text">"{t.content}"</p>
                </div>

                {/* Rider Info Footer with Font Awesome */}
                <div className="testimonial-rider-info">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="rider-avatar-img"
                    loading="lazy"
                    width="52"
                    height="52"
                  />
                  <div>
                    <h3 className="rider-meta-name">{t.name}</h3>
                    <div className="rider-meta-badge">
                      <FaCircleCheck style={{ color: "#22C55E" }} />
                      <span>{t.bikeModel}</span>
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#94A3B8" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;