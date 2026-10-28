import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaXmark, 
  FaCalendarCheck, 
  FaLocationDot, 
  FaClock, 
  FaTrash, 
  FaArrowRight 
} from 'react-icons/fa6';
import { useShop } from '../context/ShopContext';

const BookingsModal = () => {
  const { 
    bookings, 
    cancelBooking, 
    isBookingsOpen, 
    setIsBookingsOpen 
  } = useShop();

  if (!isBookingsOpen) return null;

  return (
    <div className="velofy-modal-backdrop" onClick={() => setIsBookingsOpen(false)}>
      <motion.div
        className="velofy-modal-content"
        style={{ maxWidth: '640px', padding: '28px' }}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center pb-3 border-bottom mb-4">
          <div className="d-flex align-items-center gap-2">
            <FaCalendarCheck style={{ color: '#F7935B', fontSize: '1.4rem' }} />
            <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800, color: '#0F172A' }}>
              My Test Ride Bookings ({bookings.length})
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            style={{ position: 'static' }}
            onClick={() => setIsBookingsOpen(false)}
            aria-label="Close bookings"
          >
            <FaXmark />
          </button>
        </div>

        {/* Content */}
        {bookings.length === 0 ? (
          <div className="text-center py-5">
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                background: '#FAF8F5',
                color: '#94A3B8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 16px auto',
              }}
            >
              <FaCalendarCheck />
            </div>
            <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>No Test Rides Booked Yet</h4>
            <p style={{ color: '#64748B', fontSize: '0.92rem', marginBottom: 24 }}>
              Schedule a complimentary studio or home test ride anywhere in Pakistan.
            </p>
            <a
              href="#contact"
              className="btn-velofy-primary"
              onClick={() => setIsBookingsOpen(false)}
            >
              <span>Book A Test Ride</span>
              <FaArrowRight />
            </a>
          </div>
        ) : (
          <div>
            <div style={{ maxHeight: '380px', overflowY: 'auto' }} className="d-flex flex-column gap-3 mb-4">
              {bookings.map((b) => (
                <div
                  key={b.id}
                  className="p-3 rounded-3"
                  style={{ background: '#FAF7F2', border: '1px solid rgba(15, 23, 42, 0.08)' }}
                >
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <span className="badge bg-success-subtle text-success fw-bold px-2 py-1 rounded" style={{ fontSize: '0.75rem' }}>
                        ● Confirmed
                      </span>
                      <h5 style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.1rem', marginTop: 6, marginBottom: 2 }}>
                        {b.model}
                      </h5>
                    </div>
                    <button
                      type="button"
                      className="btn btn-sm text-danger p-1"
                      onClick={() => cancelBooking(b.id)}
                      title="Cancel Booking"
                    >
                      <FaTrash style={{ fontSize: '0.85rem' }} />
                    </button>
                  </div>

                  <div className="row g-2 small text-muted mt-1">
                    <div className="col-sm-6 d-flex align-items-center gap-1">
                      <FaClock style={{ color: '#F7935B' }} />
                      <span>Date: <strong>{b.date || 'Flexible'}</strong></span>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center gap-1">
                      <FaLocationDot style={{ color: '#F7935B' }} />
                      <span>Location: <strong>Pakistan</strong></span>
                    </div>
                    <div className="col-12">
                      Rider: <strong>{b.name}</strong> ({b.email})
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex gap-2">
              <a
                href="#contact"
                className="btn-velofy-outline w-100 justify-content-center"
                onClick={() => setIsBookingsOpen(false)}
              >
                <span>Book Another Test Ride</span>
              </a>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BookingsModal;
