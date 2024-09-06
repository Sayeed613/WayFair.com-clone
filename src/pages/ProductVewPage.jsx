import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { useCart } from "../context/CartContext";
import SimilarProductsCards from "../components/SimilarProductsCards";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

const getRandomDeliveryDays = () => Math.floor(Math.random() * (7 - 2 + 1)) + 2;

export default function ProductViewPage() {
  const { id } = useParams();
  const { addToCart, cartItems, message } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError("Failed to fetch product details. Please try again later.");
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorIndicator />;
  }

  if (!product) {
    return <p>No product found.</p>;
  }

  const { title, image_url, brand, discount_price, exact_price, rating, votes, discount, category } = product;

  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) => {
      if (type === 'increase') return prevQuantity + 1;
      if (type === 'decrease') return prevQuantity > 1 ? prevQuantity - 1 : 1;
    });
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <>
      <h1 className="ml-9 p-4 text-2xl font-bold">
        Category/<span className="text-[#7b189f] text-xl">{category}</span>
      </h1>
      <div className="container mx-auto p-4 mt-4 shadow-lg flex flex-col lg:flex-row gap-4">
        {/* Product Image */}
        <div className="flex-1 flex justify-center items-center">
          <img src={image_url} alt="product-img" className="w-full h-auto max-h-[80vh] object-contain" />
        </div>

        {/* Product Details */}
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <div className="flex gap-2 mb-4">
            <p className="text-black font-thin">See More by </p>
            <p className="text-[#7b189f] cursor-pointer font-semibold underline">{brand}</p>
          </div>
          <div className="flex gap-2 mb-4">
            <p className="text-black font-semibold">Rating: {rating} out of 5</p>
            <p className="text-[#7b189f] font-semibold underline">({votes}) reviews</p>
          </div>
          <div className="flex gap-2 items-center mb-4">
            <p className="text-red-800 font-semibold text-2xl">${discount_price}</p>
            <p className="text-gray-500 line-through">${exact_price}</p>
            <p className="text-red-500 text-lg">{discount}</p>
          </div>
          <p className="text-red-800 font-semibold text-3xl mb-4">On Sale</p>
          <p className="mb-4">
            Get $14.20 BACK in Reward Dollars1 <span className="text-[#7b189f] underline cursor-pointer">with a Wayfair credit card</span>
          </p>
          <p className="mb-4">
            Pro Price: <span className="bg-[#d6bcf7] shadow-sm text-sm text-black p-1 font-semibold rounded-md">Business only</span> <span className="text-[#7b189f] underline cursor-pointer p-1">Enroll your business</span> for FREE to save on select items.
          </p>
          <p className="bg-green-600 text-white text-sm p-2 w-[150px] rounded-md mb-4">
            {getRandomDeliveryDays()}-Day Delivery
          </p>
          <p className="text-black text-lg font-bold mb-4">FREE Shipping</p>
          <p className="mb-4">Get it <span className="font-bold cursor-pointer">Tomorrow</span>! Order within 11 hrs. and 32 min.</p>

          {/* Quantity and Add to Cart Section */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => handleQuantityChange('decrease')}
                className="px-3 py-2 text-xl font-bold"
              >
                -
              </button>
              <span className="px-4 py-2 text-lg">{quantity}</span>
              <button
                onClick={() => handleQuantityChange('increase')}
                className="px-3 py-2 text-xl font-bold"
              >
                +
              </button>
            </div>
            <button className="flex items-center justify-center border border-[#7b189f] rounded-full p-3 text-[#7b189f]">
              <CiHeart size={30} />
            </button>
            <button
              onClick={handleAddToCart}
              className={`rounded-full flex-1 py-3 px-6 text-center ${isInCart ? 'bg-green-500 text-white' : 'bg-[#7b189f] text-white'}`}
            >
              {isInCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
          {message && <div className="mt-4 p-2 text-green-600">{message}</div>}
        </div>
      </div>
      <SimilarProductsCards />
    </>
  );
}
