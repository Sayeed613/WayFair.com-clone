// src/pages/Order.js
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Order() {
  const { order } = useCart();

  if (!order) {
    return (
      <div className="container mx-auto mt-10 px-4 lg:px-8">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold mb-6">No Order Found</h1>
          <p className="text-lg font-semibold text-center text-gray-600">You haven't placed an order yet.</p>
        </div>
      </div>
    );
  }

  const { orderedItems, totalAmount } = order;

  return (
    <div className="container mx-auto mt-10 px-4 lg:px-8">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Your Order</h1>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {orderedItems.map((item) => (
              <Link to={`/product/view/${item.id}`} key={item.id} className="border p-4 flex flex-col  bg-gray-50 rounded-lg w-[300px]">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="text-lg font-semibold mb-2 text-gray-700 text-start">{item.title}</h3>
                <p className="text-gray-800 mb-2 font-semibold  text-start">Price: ${item.discount_price}</p>
                <p className="text-gray-600  text-start">Qty: {item.quantity}</p>
              </Link>
            ))}
          </div>
          <div className="flex justify-between text-xl font-bold border-t pt-4 mt-4">
            <span>Total Amount:</span>
            <span>${totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
