import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Load initial cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('velofy_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Load initial test ride bookings from localStorage
  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('velofy_bookings');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isBookingsOpen, setIsBookingsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('velofy_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Sync bookings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('velofy_bookings', JSON.stringify(bookings));
    } catch (e) {
      console.error(e);
    }
  }, [bookings]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  const addToCart = (bike) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === bike.id);
      if (existing) {
        return prev.map((item) =>
          item.id === bike.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...bike, quantity: 1 }];
    });
    showToast(`Added "${bike.name}" to cart!`);
  };

  const removeFromCart = (bikeId) => {
    setCart((prev) => prev.filter((item) => item.id !== bikeId));
    showToast('Item removed from cart.');
  };

  const updateQuantity = (bikeId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === bikeId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const addBooking = (bookingData) => {
    const newBooking = {
      id: Date.now(),
      ...bookingData,
      location: 'Pakistan',
      status: 'Confirmed',
      timestamp: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    };
    setBookings((prev) => [newBooking, ...prev]);
    showToast(`Test ride for "${bookingData.model}" booked successfully!`);
  };

  const cancelBooking = (bookingId) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
    showToast('Booking cancelled.');
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        bookings,
        addBooking,
        cancelBooking,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isBookingsOpen,
        setIsBookingsOpen,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
