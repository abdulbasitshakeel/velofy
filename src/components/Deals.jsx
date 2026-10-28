import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaStar, 
  FaClock, 
  FaCartShopping, 
  FaEye, 
  FaCheck, 
  FaXmark, 
  FaWeightHanging, 
  FaGears 
} from 'react-icons/fa6';
import { useShop } from '../context/ShopContext';

const Deals = () => {
  const [activeTab, setActiveTab] = useState('road');
  const [selectedBike, setSelectedBike] = useState(null);
  const [selectedColors, setSelectedColors] = useState({});

  const { addToCart, setIsCartOpen } = useShop();

  const dealsData = {
    road: [
      {
        id: 1,
        name: 'Velofy Aero Carbon Pro SL',
        category: 'Aerodynamic Road Racer',
        price: 2499,
        originalPrice: 2999,
        discount: 17,
        rating: 4.9,
        reviewsCount: 142,
        timeLeft: '18h 35m left',
        image: '/images/bike-road.jpg',
        weight: '7.1 kg',
        drivetrain: 'Shimano Dura-Ace Di2',
        brakes: 'Hydraulic Flat-Mount Disc',
        frame: 'Toray T1000 High-Modulus Carbon',
        description: 'Wind-tunnel sculpted to slice through headwinds with ease. Featuring integrated cable routing, carbon cockpit, and ceramic speed bottom bracket.',
        colors: ['#FF5722', '#0F172A', '#E2E8F0'],
      },
      {
        id: 2,
        name: 'Velofy Endurance Carbon Di2',
        category: 'Endurance Road Bike',
        price: 1899,
        originalPrice: 2299,
        discount: 18,
        rating: 4.8,
        reviewsCount: 98,
        timeLeft: '1d 12h left',
        image: '/images/hero-bike.jpg',
        weight: '7.8 kg',
        drivetrain: 'Shimano Ultegra 12-Speed',
        brakes: 'Shimano IceTech Disc',
        frame: 'T800 Comfort-Tuned Carbon',
        description: 'Engineered for all-day gran fondos and long mountain passes. Absorbs road chatter while maximizing power transfer.',
        colors: ['#FF5722', '#F59E0B', '#1E293B'],
      },
    ],
    mountain: [
      {
        id: 3,
        name: 'Velofy TrailMaster Carbon XT',
        category: 'Full-Suspension Enduro',
        price: 2799,
        originalPrice: 3499,
        discount: 20,
        rating: 4.9,
        reviewsCount: 112,
        timeLeft: '2d 04h left',
        image: '/images/bike-mountain.jpg',
        weight: '12.4 kg',
        drivetrain: 'SRAM GX Eagle AXS Wireless',
        brakes: 'Magura MT7 4-Piston',
        frame: 'Toray Carbon Monocoque 160mm',
        description: 'Crush rock gardens and soar over tabletop jumps with 160mm plush Fox Factory Kashima suspension and carbon hoops.',
        colors: ['#FF5722', '#22C55E', '#0F172A'],
      },
      {
        id: 4,
        name: 'Velofy Alpine Peak Hardtail',
        category: 'Cross-Country Carbon',
        price: 1499,
        originalPrice: 1799,
        discount: 16,
        rating: 4.7,
        reviewsCount: 76,
        timeLeft: '1d 08h left',
        image: '/images/bike-mountain.jpg',
        weight: '9.8 kg',
        drivetrain: 'Shimano XT 1x12',
        brakes: 'Shimano Deore XT Hydraulic',
        frame: 'Ultra-Light XC Carbon',
        description: 'Lightning-fast acceleration and nimble handling for aggressive technical climbs and singletrack speed runs.',
        colors: ['#F59E0B', '#3B82F6', '#0F172A'],
      },
    ],
    urban: [
      {
        id: 5,
        name: 'Velofy Glide-E Smart Commuter',
        category: 'Urban Smart Electric',
        price: 1999,
        originalPrice: 2499,
        discount: 20,
        rating: 4.9,
        reviewsCount: 184,
        timeLeft: '12h 10m left',
        image: '/images/bike-urban.jpg',
        weight: '14.2 kg',
        drivetrain: 'Gates Carbon Belt + Enviolo',
        brakes: 'Tektro Hydraulic Disc',
        frame: 'Hydroformed Lightweight Alloy',
        description: 'Grease-free, maintenance-free belt drive paired with 85Nm mid-drive electric assist and smartphone IoT tracking.',
        colors: ['#0F172A', '#FF5722', '#94A3B8'],
      },
      {
        id: 6,
        name: 'Velofy CityStep Belt-Drive',
        category: 'Urban Minimalist',
        price: 899,
        originalPrice: 1099,
        discount: 18,
        rating: 4.6,
        reviewsCount: 65,
        timeLeft: '3d left',
        image: '/images/bike-urban.jpg',
        weight: '10.5 kg',
        drivetrain: 'Shimano Nexus 8-Speed Internal',
        brakes: 'Hydraulic Disc',
        frame: 'Double-Butted Alloy',
        description: 'The ultimate zero-hassle city machine. Silent belt drive with internal hub gears and integrated fenders.',
        colors: ['#FF5722', '#0F172A', '#38BDF8'],
      },
    ],
    gravel: [
      {
        id: 7,
        name: 'Velofy Explorer Carbon GRX',
        category: 'All-Road Gravel Machine',
        price: 2199,
        originalPrice: 2699,
        discount: 18,
        rating: 4.9,
        reviewsCount: 89,
        timeLeft: '2d 18h left',
        image: '/images/bike-gravel.jpg',
        weight: '8.4 kg',
        drivetrain: 'Shimano GRX 810 1x11',
        brakes: 'Shimano GRX Hydraulic Disc',
        frame: 'T800 Carbon All-Road Geometry',
        description: 'From smooth asphalt to rugged gravel fire roads. Wide 45c tire clearance, multiple bikepacking bosses, and flared bars.',
        colors: ['#FF5722', '#D97706', '#1E293B'],
      },
      {
        id: 8,
        name: 'Velofy Terra Overland Gravel',
        category: 'Adventure Bikepacker',
        price: 1699,
        originalPrice: 1999,
        discount: 15,
        rating: 4.7,
        reviewsCount: 52,
        timeLeft: '1d 06h left',
        image: '/images/bike-gravel.jpg',
        weight: '9.2 kg',
        drivetrain: 'SRAM Apex 1x12 Hydraulic',
        brakes: 'SRAM Hydraulic Flat Mount',
        frame: 'Carbon Adventure Frame',
        description: 'Rugged versatility with comfort compliance seatstays, dropper post routing, and rugged tubeless-ready rims.',
        colors: ['#10B981', '#FF5722', '#0F172A'],
      },
    ],
  };

  const handleAddToCart = (bike) => {
    addToCart(bike);
  };

  const handleColorSelect = (bikeId, color) => {
    setSelectedColors((prev) => ({ ...prev, [bikeId]: color }));
  };

  return (
    <section className="deals-section-wrapper" id="deals">
      <div className="container">
        {/* Section Header - No Pill */}
        <div className="text-center">
          <h2 className="section-title">
            Velofy <span className="text-orange">Hot Bicycle Deals</span>
          </h2>
          <p className="section-subtitle">
            Take your riding to the podium. Save up to 25% on our most sought-after
            carbon racing road bikes, trail devourers, and smart urban electric rides.
          </p>
        </div>

        {/* Category Segmented Tabs - Modern clean tabs, no pills */}
        <div className="text-center">
          <div className="deals-category-nav" role="tablist">
            {[
              { id: 'road', label: 'Road Racing Bikes' },
              { id: 'mountain', label: 'Mountain & Enduro' },
              { id: 'urban', label: 'Urban & Smart E-Bikes' },
              { id: 'gravel', label: 'Gravel & Adventure' },
            ].map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`deals-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="deals-product-grid">
          <AnimatePresence mode="wait">
            {dealsData[activeTab].map((bike) => (
              <motion.article
                key={bike.id}
                className="velofy-bike-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Badges - Modern soft-corner tags */}
                <div className="card-top-badges">
                  <span className="badge-discount">SAVE {bike.discount}%</span>
                  <span className="badge-timer">
                    <FaClock /> {bike.timeLeft}
                  </span>
                </div>

                {/* Bike Media Showcase */}
                <div className="bike-card-media">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="bike-card-img"
                    loading="lazy"
                    width="400"
                    height="260"
                  />
                </div>

                {/* Card Content Body */}
                <div className="bike-card-body">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="bike-card-category">{bike.category}</span>
                    {/* Color Swatches */}
                    <div className="d-flex gap-1">
                      {bike.colors.map((c, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleColorSelect(bike.id, c)}
                          style={{
                            width: 14,
                            height: 14,
                            borderRadius: '50%',
                            backgroundColor: c,
                            border: selectedColors[bike.id] === c ? '2px solid #FF5722' : '1px solid #CBD5E1',
                            padding: 0,
                            cursor: 'pointer',
                          }}
                          aria-label={`Select color ${c}`}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="bike-card-title">{bike.name}</h3>

                  {/* Rating with Font Awesome Star */}
                  <div className="bike-rating-row">
                    <div className="stars-group">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          color={i < Math.floor(bike.rating) ? '#F59E0B' : '#E2E8F0'}
                          style={{ fontSize: '0.85rem' }}
                        />
                      ))}
                    </div>
                    <span className="rating-text">
                      {bike.rating} ({bike.reviewsCount} reviews)
                    </span>
                  </div>

                  {/* Mini Specs Row with Font Awesome */}
                  <div className="bike-card-specs-row">
                    <div className="mini-spec-item">
                      <div className="val">{bike.weight}</div>
                      <div className="lbl">Weight</div>
                    </div>
                    <div className="mini-spec-item">
                      <div className="val">{bike.drivetrain.split(' ')[0]}</div>
                      <div className="lbl">Drivetrain</div>
                    </div>
                    <div className="mini-spec-item">
                      <div className="val">Carbon</div>
                      <div className="lbl">Frame</div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="bike-pricing-row">
                    <span className="price-current">${bike.price.toLocaleString()}</span>
                    <span className="price-original">${bike.originalPrice.toLocaleString()}</span>
                  </div>

                  {/* Action Buttons with Font Awesome */}
                  <div className="card-action-btns">
                    <button
                      type="button"
                      className="btn-add-cart"
                      onClick={() => handleAddToCart(bike)}
                    >
                      <FaCartShopping />
                      <span>Order Bicycle</span>
                    </button>
                    <button
                      type="button"
                      className="btn-quick-view"
                      onClick={() => setSelectedBike(bike)}
                      aria-label="View specifications"
                      title="Quick View Specs"
                    >
                      <FaEye />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Quick View Modal Popup with Font Awesome */}
        <AnimatePresence>
          {selectedBike && (
            <div className="velofy-modal-backdrop" onClick={() => setSelectedBike(null)}>
              <motion.div
                className="velofy-modal-content"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.25 }}
              >
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setSelectedBike(null)}
                  aria-label="Close dialog"
                >
                  <FaXmark />
                </button>

                <div className="row g-4 align-items-center">
                  <div className="col-md-6">
                    <div style={{ borderRadius: 16, overflow: 'hidden', background: '#F8FAFC' }}>
                      <img
                        src={selectedBike.image}
                        alt={selectedBike.name}
                        className="w-100"
                        style={{ height: 320, objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-uppercase text-orange fw-bold mb-1" style={{ fontSize: '0.85rem' }}>
                      {selectedBike.category}
                    </div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 8 }}>
                      {selectedBike.name}
                    </h3>

                    <div className="d-flex align-items-baseline gap-3 mb-3">
                      <span className="price-current" style={{ fontSize: '2rem' }}>
                        ${selectedBike.price.toLocaleString()}
                      </span>
                      <span className="price-original">
                        ${selectedBike.originalPrice.toLocaleString()}
                      </span>
                      <span className="badge-discount">SAVE {selectedBike.discount}%</span>
                    </div>

                    <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      {selectedBike.description}
                    </p>

                    <div className="p-3 mb-4 rounded-3" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                      <div className="row g-2 small">
                        <div className="col-6"><strong>Frame:</strong> {selectedBike.frame}</div>
                        <div className="col-6"><strong>Drivetrain:</strong> {selectedBike.drivetrain}</div>
                        <div className="col-6"><strong>Brakes:</strong> {selectedBike.brakes}</div>
                        <div className="col-6"><strong>Weight:</strong> {selectedBike.weight}</div>
                      </div>
                    </div>

                    <div className="d-flex gap-3">
                      <button
                        type="button"
                        className="btn-velofy-primary flex-grow-1 justify-content-center"
                        onClick={() => {
                          addToCart(selectedBike);
                          setSelectedBike(null);
                          setIsCartOpen(true);
                        }}
                      >
                        <FaCartShopping />
                        <span>Add To Cart & View (${selectedBike.price.toLocaleString()})</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Deals;