import { useState } from "react";
import { useCart } from "../context/CartContext";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import SimilarProductsCards from "../components/SimilarProductsCards";

export default function Cart() {
  const { cartItems, removeFromCart, placeOrder } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const newOrder = placeOrder(); // Place the order using the context function
      setIsProcessing(false);
      toast.success('Order placed successfully!');
      navigate('/order'); // Redirect to the order page
    }, 3000);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.discount_price * item.quantity, 0);

  return (
    <div className="container mx-auto mt-10 px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex-1 p-4 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-lg font-semibold text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cartItems.map((item) => (
                <div key={item.id} className="border p-4 flex flex-col items-center bg-gray-50 rounded-lg">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h3 className="text-lg font-semibold mb-2 text-gray-700 text-center">{item.title}</h3>
                  <p className="text-gray-800 mb-2 font-semibold">Price: ${item.discount_price}</p>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-gray-600">Qty: {item.quantity}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full lg:w-[30%] p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-lg">
              <span className="font-medium text-gray-700">Subtotal:</span>
              <span className="font-semibold">${totalAmount}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="font-medium text-gray-700">Shipping:</span>
              <span className="font-semibold">$10.00</span>
            </div>
            <div className="flex justify-between text-xl font-bold border-t pt-4 mt-4">
              <span>Total:</span>
              <span>${(totalAmount + 10)}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className={`w-full py-3 rounded-md text-white font-semibold ${isProcessing || cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#7b189f] hover:bg-[#6c1f8b] transition-colors'}`}
              disabled={isProcessing || cartItems.length === 0}
            >
              {isProcessing ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </div>
      </div>
      <SimilarProductsCards />
      <ToastContainer position="bottom-right" />
    </div>
  );
}
