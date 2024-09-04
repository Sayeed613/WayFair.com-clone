import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState("");
  const [order, setOrder] = useState(null); // Add state to hold the order

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
    setMessage(`Added ${product.title} to cart.`);
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const placeOrder = () => {
    const newOrder = {
      orderedItems: cartItems,
      totalAmount: cartItems.reduce((total, item) => total + item.discount_price * item.quantity, 0),
    };
    setOrder(newOrder); // Save the order
    clearCart(); // Clear cart after placing the order
    return newOrder;
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, message, clearCart, placeOrder, order }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
