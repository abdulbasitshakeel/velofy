import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaXmark, 
  FaTrash, 
  FaPlus, 
  FaMinus, 
  FaArrowRight, 
  FaCartShopping, 
  FaShieldHalved, 
  FaTruckFast 
} from 'react-icons/fa6';
import { useShop } from '../context/ShopContext';

const CartModal = () => {
  const { 
    cart, 
    cartCount, 
    cartTotal, 
    removeFromCart, 
    updateQuantity, 
    isCartOpen, 
    setIsCartOpen, 
    setIsCheckoutOpen 
  } = useShop();

  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  if (!isCartOpen) return null;

  const discountAmount = discountApplied ? Math.min(100, Math.round(cartTotal * 0.1)) : 0;
  const finalTotal = Math.max(0, cartTotal - discountAmount);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'VELOFY' || promoCode.trim().length > 2) {
      setDiscountApplied(true);
    }
  };

  const handleProceedToPayment = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="velofy-modal-backdrop" onClick={() => setIsCartOpen(false)}>
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
            <FaCartShopping style={{ color: '#F7935B', fontSize: '1.4rem' }} />
            <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800, color: '#0F172A' }}>
              Your Bicycle Cart ({cartCount})
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            style={{ position: 'static' }}
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <FaXmark />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
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
              <FaCartShopping />
            </div>
            <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>Your cart is empty</h4>
            <p style={{ color: '#64748B', fontSize: '0.92rem', marginBottom: 24 }}>
              Explore our performance road, mountain, and smart electric bicycles to get started.
            </p>
            <a
              href="#deals"
              className="btn-velofy-primary"
              onClick={() => setIsCartOpen(false)}
            >
              <span>Browse Bicycles</span>
              <FaArrowRight />
            </a>
          </div>
        ) : (
          <div>
            <div style={{ maxHeight: '340px', overflowY: 'auto', paddingRight: '6px' }} className="d-flex flex-column gap-3 mb-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-3 d-flex align-items-center justify-content-between gap-3"
                  style={{ background: '#FAF7F2', border: '1px solid rgba(15, 23, 42, 0.08)' }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 10, background: '#FFFFFF' }}
                  />

                  <div className="flex-grow-1">
                    <div style={{ fontSize: '0.75rem', color: '#F7935B', fontWeight: 700, textTransform: 'uppercase' }}>
                      {item.category}
                    </div>
                    <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem', lineHeight: 1.2, marginBottom: 4 }}>
                      {item.name}
                    </div>
                    <div style={{ fontWeight: 800, color: '#F7935B', fontSize: '1.05rem' }}>
                      ${(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="d-flex align-items-center gap-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-light p-1 rounded-circle"
                      style={{ width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      onClick={() => updateQuantity(item.id, -1)}
                      aria-label="Decrease quantity"
                    >
                      <FaMinus style={{ fontSize: '0.65rem' }} />
                    </button>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', minWidth: 18, textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      className="btn btn-sm btn-light p-1 rounded-circle"
                      style={{ width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      onClick={() => updateQuantity(item.id, 1)}
                      aria-label="Increase quantity"
                    >
                      <FaPlus style={{ fontSize: '0.65rem' }} />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    className="btn btn-sm text-danger p-2"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                    title="Remove item"
                  >
                    <FaTrash style={{ fontSize: '0.9rem' }} />
                  </button>
                </div>
              ))}
            </div>

            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="d-flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Promo Code (e.g. VELOFY)"
                className="velofy-form-control py-2"
                style={{ fontSize: '0.85rem' }}
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button
                type="submit"
                className="btn-velofy-outline py-2 px-3"
                style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
              >
                Apply
              </button>
            </form>

            {discountApplied && (
              <div className="small text-success mb-3 fw-bold">
                ✓ Special Discount Applied: -${discountAmount}
              </div>
            )}

            {/* Order Summary Breakdown */}
            <div className="p-3 rounded-3 mb-4" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
              <div className="d-flex justify-content-between mb-1" style={{ fontSize: '0.9rem', color: '#64748B' }}>
                <span>Subtotal</span>
                <span className="fw-bold" style={{ color: '#0F172A' }}>${cartTotal.toLocaleString()}</span>
              </div>
              {discountApplied && (
                <div className="d-flex justify-content-between mb-1" style={{ fontSize: '0.9rem', color: '#22C55E' }}>
                  <span>Discount</span>
                  <span className="fw-bold">-${discountAmount}</span>
                </div>
              )}
              <div className="d-flex justify-content-between mb-2" style={{ fontSize: '0.9rem', color: '#64748B' }}>
                <span className="d-flex align-items-center gap-1">
                  <FaTruckFast style={{ color: '#22C55E' }} />
                  <span>Express Delivery (Pakistan)</span>
                </span>
                <span className="text-success fw-bold">FREE</span>
              </div>
              <div className="border-top pt-2 d-flex justify-content-between align-items-baseline">
                <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0F172A' }}>Total</span>
                <span style={{ fontWeight: 900, fontSize: '1.5rem', color: '#F7935B' }}>
                  ${finalTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Proceed to Checkout / Payment Button */}
            <button
              type="button"
              className="btn-velofy-primary w-100 py-3 justify-content-center"
              onClick={handleProceedToPayment}
            >
              <span>Proceed to Payment Page</span>
              <FaArrowRight />
            </button>

            <div className="d-flex align-items-center justify-content-center gap-3 mt-3 text-muted small">
              <span className="d-flex align-items-center gap-1">
                <FaShieldHalved style={{ color: '#22C55E' }} />
                <span>SSL Encrypted Checkout</span>
              </span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CartModal;
