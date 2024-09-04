import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

const getRandomDeliveryDays = () => Math.floor(Math.random() * (7 - 2 + 1)) + 2;

export default function Kitchen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const itemsPerPage = 12;

  async function fetchData() {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/products");
      const fetchedProducts = response.data || [];
      const filteredProducts = fetchedProducts.filter(
        (product) => product.category === "kitchen"
      );
      setProducts(filteredProducts);
    } catch (error) {
      setError(true);
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Sort products based on selected sort option
  const sortProducts = (products) => {
    return products.sort((a, b) => {
      switch (sortOption) {
        case "priceLowToHigh":
          return a.discount_price - b.discount_price;
        case "priceHighToLow":
          return b.discount_price - a.discount_price;
        case "ratingLowToHigh":
          return a.rating - b.rating;
        case "ratingHighToLow":
          return b.rating - a.rating;
        case "votesLowToHigh":
          return a.votes - b.votes;
        case "votesHighToLow":
          return b.votes - a.votes;
        default:
          return 0;
      }
    });
  };

  // Filter products based on brand
  const filteredProducts = sortProducts(
    products.filter((product) => (selectedBrand ? product.brand === selectedBrand : true))
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold p-10 text-start">Kitchen</h1>
      <hr />
      <div className="flex flex-col md:flex-row">
        {/* Filters Section */}
        <div className="w-full md:w-1/4 p-4">
          <h2 className="text-lg font-bold mb-4">Filters</h2>

          {/* Sort by Price */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Price</label>
            <select
              value={sortOption}
              onChange={handleSortOptionChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>

          {/* Sort by Rating */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Rating</label>
            <select
              value={sortOption}
              onChange={handleSortOptionChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="ratingLowToHigh">Rating: Low to High</option>
              <option value="ratingHighToLow">Rating: High to Low</option>
            </select>
          </div>

          {/* Sort by Votes */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Votes</label>
            <select
              value={sortOption}
              onChange={handleSortOptionChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="votesLowToHigh">Votes: Low to High</option>
              <option value="votesHighToLow">Votes: High to Low</option>
            </select>
          </div>

          {/* Filter by Brand */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Brand</label>
            <select
              value={selectedBrand}
              onChange={handleBrandChange}
              className="w-full p-2 border rounded"
            >
              <option value="">All Brands</option>
              {Array.from(new Set(products.map((product) => product.brand))).map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Section */}
        <div className="w-full md:w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

            {currentItems.length === 0 && !loading && (
              <p>No home improvement products available.</p>
            )}
            {currentItems.map((product) => (
              <Link
              to={`/product/view/${product.id}`}
                key={product.id}
                className="hover:border-4 hover:border-sky-500 w-full max-w-sm h-auto rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={product.image_url}
                  alt={product.title}
                  className="w-full  object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h1 className="text-gray-600 font-semibold text-lg">{product.title}</h1>
                  <h2 className="text-gray-400 text-sm">by {product.brand}</h2>
                  <div className="flex gap-3 items-center mt-2">
                    <p className="text-red-800 text-xl font-bold">
                      ${product.discount_price.toFixed(2)}
                    </p>
                    <p className="text-gray-400 text-sm line-through">
                      ${product.exact_price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex gap-3 items-center mt-2">
                    <p className="text-gray-600 text-sm">Rating: {product.rating.toFixed(1)} ({product.votes} votes)</p>
                  </div>
                  <p className="bg-green-600 text-white text-sm mt-2 p-2 w-full rounded-b-lg">
                    {getRandomDeliveryDays()}-Day Delivery
                  </p>
                  <p className="pt-2 text-black text-xs">FREE Shipping</p>
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
                  currentPage === index + 1 ? "bg-[#7b189f] text-white" : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
