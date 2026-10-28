import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaXmark, 
  FaCreditCard, 
  FaMobileScreenButton, 
  FaTruck, 
  FaLock, 
  FaCircleCheck, 
  FaArrowLeft, 
  FaSpinner 
} from 'react-icons/fa6';
import { useShop } from '../context/ShopContext';

const CheckoutModal = () => {
  const { 
    cart, 
    cartTotal, 
    clearCart, 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    setIsCartOpen 
  } = useShop();

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [shippingData, setShippingData] = useState({
    name: '',
    email: 'basitshakeel2005@gmail.com',
    address: '',
    city: 'Karachi',
    country: 'Pakistan',
  });

  const [cardData, setCardData] = useState({
    number: '4242 •••• •••• 4242',
    expiry: '12/28',
    cvv: '888',
  });

  if (!isCheckoutOpen) return null;

  const handlePay = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setOrderId(`VEL-${Math.floor(100000 + Math.random() * 900000)}`);
      setOrderComplete(true);
      clearCart();
    }, 1500);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setOrderComplete(false);
  };

  return (
    <div className="velofy-modal-backdrop" onClick={handleClose}>
      <motion.div
        className="velofy-modal-content"
        style={{ maxWidth: '680px', padding: '32px' }}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
      >
        <div className="d-flex justify-content-between align-items-center pb-3 border-bottom mb-4">
          <div className="d-flex align-items-center gap-2">
            {!orderComplete && (
              <button
                type="button"
                className="btn btn-sm btn-light me-1"
                onClick={() => {
                  setIsCheckoutOpen(false);
                  setIsCartOpen(true);
                }}
                aria-label="Back to Cart"
              >
                <FaArrowLeft />
              </button>
            )}
            <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800, color: '#0F172A' }}>
              {orderComplete ? 'Order Receipt' : 'Secure Payment Checkout'}
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            style={{ position: 'static' }}
            onClick={handleClose}
            aria-label="Close checkout"
          >
            <FaXmark />
          </button>
        </div>

        {orderComplete ? (
          <div className="text-center py-4">
            <div
              style={{
                width: 76,
                height: 76,
                borderRadius: '50%',
                background: 'rgba(34, 197, 94, 0.12)',
                color: '#22C55E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                margin: '0 auto 16px auto',
              }}
            >
              <FaCircleCheck />
            </div>

            <h4 style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.6rem', marginBottom: 6 }}>
              Payment Confirmed!
            </h4>
            <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: 20 }}>
              Your bicycle order has been placed. Order tracking details have been sent to <strong>{shippingData.email}</strong>.
            </p>

            <div className="p-3 rounded-3 text-start mb-4" style={{ background: '#FAF7F2', border: '1px solid rgba(15, 23, 42, 0.08)' }}>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted small">Order Number:</span>
                <span className="fw-bold" style={{ color: '#F7935B' }}>{orderId}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted small">Destination:</span>
                <span className="fw-bold">{shippingData.city}, Pakistan</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted small">Payment Method:</span>
                <span className="fw-bold text-uppercase">{paymentMethod}</span>
              </div>
              <div className="d-flex justify-content-between border-top pt-2">
                <span className="fw-bold">Total Paid:</span>
                <span className="fw-bold" style={{ color: '#F7935B', fontSize: '1.1rem' }}>${cartTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="button"
              className="btn-velofy-primary px-4 py-2"
              onClick={handleClose}
            >
              <span>Back To Home</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handlePay}>
            {/* Delivery Details */}
            <h5 style={{ fontWeight: 700, fontSize: '1rem', color: '#0F172A', marginBottom: 12 }}>
              1. Delivery Details (Pakistan)
            </h5>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-floating-label">Recipient Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="velofy-form-control py-2"
                  value={shippingData.name}
                  onChange={(e) => setShippingData({ ...shippingData, name: e.target.value })}
                />
              </div>

              <div className="col-md-6">
                <label className="form-floating-label">Email Address</label>
                <input
                  type="email"
                  required
                  className="velofy-form-control py-2"
                  value={shippingData.email}
                  onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                />
              </div>

              <div className="col-md-8">
                <label className="form-floating-label">Delivery Street Address</label>
                <input
                  type="text"
                  required
                  placeholder="Street / Area Address in Pakistan"
                  className="velofy-form-control py-2"
                  value={shippingData.address}
                  onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                />
              </div>

              <div className="col-md-4">
                <label className="form-floating-label">City</label>
                <select
                  className="velofy-form-control py-2"
                  value={shippingData.city}
                  onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                >
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Multan">Multan</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Quetta">Quetta</option>
                </select>
              </div>
            </div>

            {/* Payment Method Selector */}
            <h5 style={{ fontWeight: 700, fontSize: '1rem', color: '#0F172A', marginBottom: 12 }}>
              2. Select Payment Method
            </h5>

            <div className="row g-2 mb-4">
              <div className="col-4">
                <div
                  role="button"
                  tabIndex={0}
                  className={`p-3 rounded-3 text-center border h-100 ${paymentMethod === 'card' ? 'border-orange bg-orange-subtle' : 'bg-light'}`}
                  style={{
                    cursor: 'pointer',
                    borderColor: paymentMethod === 'card' ? '#F7935B' : '#E2E8F0',
                    background: paymentMethod === 'card' ? '#FFF9F5' : '#FFFFFF',
                  }}
                  onClick={() => setPaymentMethod('card')}
                >
                  <FaCreditCard style={{ color: '#F7935B', fontSize: '1.4rem', marginBottom: 6 }} />
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>Card</div>
                </div>
              </div>

              <div className="col-4">
                <div
                  role="button"
                  tabIndex={0}
                  className={`p-3 rounded-3 text-center border h-100 ${paymentMethod === 'mobile' ? 'border-orange bg-orange-subtle' : 'bg-light'}`}
                  style={{
                    cursor: 'pointer',
                    borderColor: paymentMethod === 'mobile' ? '#F7935B' : '#E2E8F0',
                    background: paymentMethod === 'mobile' ? '#FFF9F5' : '#FFFFFF',
                  }}
                  onClick={() => setPaymentMethod('mobile')}
                >
                  <FaMobileScreenButton style={{ color: '#F7935B', fontSize: '1.4rem', marginBottom: 6 }} />
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>JazzCash / EasyPaisa</div>
                </div>
              </div>

              <div className="col-4">
                <div
                  role="button"
                  tabIndex={0}
                  className={`p-3 rounded-3 text-center border h-100 ${paymentMethod === 'cod' ? 'border-orange bg-orange-subtle' : 'bg-light'}`}
                  style={{
                    cursor: 'pointer',
                    borderColor: paymentMethod === 'cod' ? '#F7935B' : '#E2E8F0',
                    background: paymentMethod === 'cod' ? '#FFF9F5' : '#FFFFFF',
                  }}
                  onClick={() => setPaymentMethod('cod')}
                >
                  <FaTruck style={{ color: '#F7935B', fontSize: '1.4rem', marginBottom: 6 }} />
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>Cash On Delivery</div>
                </div>
              </div>
            </div>

            {/* Payment Fields */}
            {paymentMethod === 'card' && (
              <div className="p-3 rounded-3 mb-4" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div className="mb-3">
                  <label className="form-floating-label">Card Number</label>
                  <input
                    type="text"
                    required
                    className="velofy-form-control py-2"
                    value={cardData.number}
                    onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                  />
                </div>
                <div className="row g-2">
                  <div className="col-6">
                    <label className="form-floating-label">Expiry</label>
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      className="velofy-form-control py-2"
                      value={cardData.expiry}
                      onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-floating-label">CVC / CVV</label>
                    <input
                      type="password"
                      required
                      maxLength={4}
                      className="velofy-form-control py-2"
                      value={cardData.cvv}
                      onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'mobile' && (
              <div className="p-3 rounded-3 mb-4" style={{ background: '#FFF9F5', border: '1px solid #F7935B' }}>
                <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: 4 }}>Mobile Wallet Payment</div>
                <p style={{ fontSize: '0.88rem', color: '#64748B', margin: 0 }}>
                  Enter your mobile account number to receive an instant USSD / push approval prompt on your phone.
                </p>
                <input
                  type="tel"
                  placeholder="03xxxxxxxxx"
                  className="velofy-form-control mt-2 py-2"
                  required
                />
              </div>
            )}

            {paymentMethod === 'cod' && (
              <div className="p-3 rounded-3 mb-4" style={{ background: '#FAF7F2', border: '1px solid rgba(15, 23, 42, 0.08)' }}>
                <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: 4 }}>Cash On Delivery</div>
                <p style={{ fontSize: '0.88rem', color: '#64748B', margin: 0 }}>
                  Pay cash upon doorstep inspection of your bicycle anywhere in Pakistan.
                </p>
              </div>
            )}

            {/* Pay Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="btn-velofy-primary w-100 py-3 justify-content-center"
              style={{ fontSize: '1.05rem' }}
            >
              {isProcessing ? (
                <>
                  <FaSpinner className="fa-spin" />
                  <span>Processing Secure Payment...</span>
                </>
              ) : (
                <>
                  <FaLock />
                  <span>Pay ${cartTotal.toLocaleString()} & Place Order</span>
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default CheckoutModal;
