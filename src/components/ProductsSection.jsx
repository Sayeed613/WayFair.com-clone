// ProductsSection.js
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";


const getRandomDeliveryDays = () => Math.floor(Math.random() * (7 - 2 + 1)) + 2;

function ProductsSection({ products, loading, error, currentItems, handlePageChange, currentPage, totalPages }) {

  if(loading){
    <LoadingIndicator/>
  }
  if(error){
    <ErrorIndicator/>
  }

  return (
    <div className="w-full md:w-3/4 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

        {currentItems.map((product) => (
          <Link to={`/product/view/${product.id}`} key={product.id} className="hover:border-4 hover:border-sky-500 w-full max-w-sm h-auto rounded-lg overflow-hidden shadow-lg">
            <img
              src={product.image_url}
              alt={product.title}
              className="w-full h-[350px] object-cover rounded-t-lg p-2"
            />
            <div className="p-2">
              <h1 className="text-gray-600 font-semibold">{product.title}</h1>
              <h2 className="text-gray-400 text-sm">by {product.brand}</h2>
              <div className="flex gap-3 items-center">
                <p className="pt-2 text-red-800 text-[20px] font-bold">${product.discount_price}</p>
                <p className="pt-2 text-gray-400 text-[15px] line-through">${product.original_price}</p>
              </div>
              <div className="flex gap-3 items-center">
                <p className="pt-2 text-gray-600 text-[13px]">Rating: {product.rating || 'N/A'} ({product.votes || 'N/A'} votes)</p>
              </div>
              <p className="bg-green-600 text-white text-[15px] mt-2 p-2 w-40 rounded-e-xl">
                {getRandomDeliveryDays()}-Day Delivery
              </p>
              <p className="pt-2 text-black text-[10px]">FREE Shipping</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center my-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1 ? 'bg-[#7b189f] text-white' : 'bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

ProductsSection.propTypes = {
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  currentItems: PropTypes.array.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default ProductsSection;
