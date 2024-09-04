import { useEffect, useState } from "react";
import axios from "axios";
import ProductsSection from "../components/ProductsSection";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

export default function Appliances() {
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
        (product) => product.category === "appliance"
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
  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorIndicator />;
  }

  // Sort products based on selected sort option
  const sortProducts = (items) => {
    return items.sort((a, b) => {
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

  // Filter and sort products based on selected brand and sort option
  const filteredProducts = sortProducts(
    products.filter((product) => (selectedBrand ? product.brand === selectedBrand : true))
  );

  // Calculate the products to be shown on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Determine total number of pages
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
  if(loading){
    <LoadingIndicator/>
  }
  if(error){
    <ErrorIndicator/>
  }

  return (
    <>
      <h1 className="text-bold text-[40px] font-bold p-10 text-start">Appliances</h1>
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
        <ProductsSection
          products={products}
          loading={loading}
          error={error}
          currentItems={currentItems}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
        </div>
    </>
  );
}
