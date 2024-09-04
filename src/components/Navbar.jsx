import logo from "../assets/wayfair-logo.png";
import { IoIosMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import {
  MdOutlineAccountCircle,
  MdReviews,
  MdOutlinePreview,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { IoIosHelpCircleOutline, IoIosClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import furniture from "../assets/furniture.webp";
import appliances from "../assets/appliances.webp";
import outdoor from "../assets/outdoor.webp";
import homeImprovements from "../assets/homeImprovements.webp";
import kitchen from "../assets/kitchen.webp";
import light from "../assets/light.webp";
import jossandmain from "../assets/joss&main.png";
import allModern from "../assets/AllModern-Logo.png";
import brich from "../assets/brich.png";
import axios from "axios";

export default function Navbar() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState(""); // State for search query
  const [results, setResults] = useState([]); // State for search results
  const [loading, setLoading] = useState(false);
  const navigate =  useNavigate()

  const fetchResults = async (searchQuery) => {
    if (searchQuery.trim() === "") {
        setResults([]);
        return;
    }

    setLoading(true);
    try {
        const response = await axios.get("http://localhost:3000/products");
        console.log(response.data); // Log the entire response

        // Filter results based on searchQuery
        const filteredResults = response.data.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setResults(filteredResults);
    } catch (error) {
        console.error("Error fetching search results", error);
        // Provide user feedback
        setResults([]);
    } finally {
        setLoading(false);
    }
};



  useEffect(() => {
    const debounceFetch = setTimeout(() => fetchResults(query), 300); // Debounce to reduce API calls

    return () => clearTimeout(debounceFetch); // Cleanup on unmount or query change
  }, [query]);

  console.log(results)

  const links = [
    {
      to: "/appliances",
      label: "Appliances",
    },
    {
      to: "/furniture",
      label: "Furniture",
    },
    {
      to: "/homeimprovement",
      label: "Home Improvements",
    },
    {
      to: "/kitchen",
      label: "Kitchen",
    },
    {
      to: "/lighting",
      label: "Lighting",
    },
    {
      to: "/outdoor",
      label: "Out Door",
    }
  ];

  if (
    location.pathname === "/signin" ||
    location.pathname === "/login" ||
    location.pathname === "/error"
  ) {
    return null;
  }
  function handleLogout(){
    navigate('/login')
  }
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-2 w-[90%] m-auto">
        {/* Menu and Logo */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <IoIosMenu
            size={36}
            className="sm:hidden block"
            onClick={() => setVisible(!visible)} // Toggle the sidebar visibility
          />
          <Link to="/">
            <img src={logo} alt="logo" className="w-36 sm:ml-4 mx-auto" />
          </Link>
          <div className="flex sm:hidden items-center gap-4">
            <MdOutlineAccountCircle size={24} className="sm:hidden block" />
            <IoCartOutline size={24} className="sm:hidden block" />
          </div>
        </div>

        {/* Input Field */}
        <div className="relative w-full sm:w-[720px]">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-black h-11 w-full p-4 rounded-lg placeholder-black mb-4 sm:mb-0"
            placeholder="Find anything home...."
          />
          {/* Search Results */}
          {query && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto z-50">
              {loading && <p className="p-2 text-center">Loading...</p>}
              {results && Array.isArray(results) && results.length > 0 ? (
                results.map((result) => (
                  <Link
                    key={result.id}
                    to={`/product/view/${result.id}`}
                    className="block p-2 hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={result.image_url}
                        alt={result.title}
                        className="w-16 h-16 object-cover"
                      />
                      <p className="text-black">{result.title}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="p-2 text-center">No results found</p>
              )}
            </div>
          )}
        </div>

        {/* Profile and Cart (only visible on large screens) */}
        <div className="hidden sm:flex items-center gap-6">
          <div className="group relative">
            <div className="flex items-center gap-2 cursor-pointer">
              <MdOutlineAccountCircle size={24} />
              <span className="text-black">Account</span>
            </div>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 border-black border-x-fuchsia-300">
              <div
                className="flex flex-col gap-2 w-[270px] px-5 pt-4 text-black bg-slate-50 rounded"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                }}
              >
                <NavLink to="/signin">
                  <button className="bg-[#7b189f] text-white py-1 px-2 rounded-full w-[200px] text-base sm:text-lg">
                    Sign In
                  </button>
                </NavLink>
                <hr />
                <div className="flex items-center gap-2 pt-1 cursor-pointer hover:underline">
                  <MdOutlineAccountCircle size={24} />
                  <p className="">Account</p>
                </div>
                <Link to={"/order"} className="flex items-center gap-2 cursor-pointer hover:underline">
                  <FaDropbox size={30} />
                  <p className="font-semibold">Orders</p>
                </Link>
                <div className="flex items-center gap-2 cursor-pointer hover:underline">
                  <FaRegHeart size={24} />
                  <p className="font-semibold">Lists</p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:underline">
                  <MdReviews size={30} />
                  <p className="font-semibold">Review My Purchases</p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:underline">
                  <MdOutlinePreview size={30} />
                  <p className="font-semibold">Recently Viewed</p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:underline">
                  <IoIosHelpCircleOutline size={30} />
                  <p className="font-semibold">Help & Contact</p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:underline">
                  <FiBox size={30} />
                  <p className="font-semibold">3D Room Planner</p>
                </div>
                <hr />
                <p onClick={handleLogout}
                  className="p-2 cursor-pointer hover:text-black font-[18px]"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
          <NavLink to="/cart">
            <div className="flex items-center gap-2 cursor-pointer">
              <IoCartOutline size={24} />
              <span className="text-black">Cart</span>
            </div>
          </NavLink>
        </div>

        {/* Side Bar menu for small screens */}
        <div
          className={`absolute top-0 left-0 bottom-0 overflow-auto bg-white transition-all z-50 ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-black">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 cursor-pointer"
            >
              <div className="flex gap-2 items-center pl-6 pt-4">
                <IoIosClose size={34} />
                <NavLink to="/">
                  <img src={logo} alt="" className="w-[120px] pt-[-30px]" />
                </NavLink>
              </div>
            </div>
            <hr />
            <div className="flex flex-row items-center gap-2 w-30 p-4">
              <FaRegHeart size={30} />
              <p className="font-semibold">List</p>
            </div>
            <hr />
            <NavLink to="/orders">
              <div className="flex flex-row items-center gap-2 w-30 p-4">
                <FaDropbox size={30} />
                <p className="font-semibold">Orders</p>
              </div>
            </NavLink>
            <hr />
            <NavLink to="/furniture">
              <div
                className="flex justify-between items-center gap-2 w-30 p-4"
                onClick={() => setVisible(false)}
              >
                <div className="flex gap-4 items-center">
                  <img src={furniture} className="w-14" />
                  <p className="font-semibold">Furniture</p>
                </div>
                <MdKeyboardArrowRight size={30} />
              </div>
            </NavLink>
            <hr />
            <NavLink to="/appliances">
              <div
                className="flex justify-between items-center gap-2 w-30 p-4"
                onClick={() => setVisible(false)}
              >
                <div className="flex gap-4 items-center">
                  <img src={appliances} className="w-14" />
                  <p className="font-semibold">Appliances</p>
                </div>
                <MdKeyboardArrowRight size={30} />
              </div>
            </NavLink>
            <hr />
            <NavLink to="/outdoor">
              <div
                className="flex justify-between items-center gap-2 w-30 p-4"
                onClick={() => setVisible(false)}
              >
                <div className="flex gap-4 items-center">
                  <img src={outdoor} className="w-14" />
                  <p className="font-semibold">Outdoor</p>
                </div>
                <MdKeyboardArrowRight size={30} />
              </div>
            </NavLink>
            <hr />
            <NavLink to="/homeImprovement">
              <div
                className="flex justify-between items-center gap-2 w-30 p-4"
                onClick={() => setVisible(false)}
              >
                <div className="flex gap-4 items-center">
                  <img src={homeImprovements} className="w-14" />
                  <p className="font-semibold">Home Improvements</p>
                </div>
                <MdKeyboardArrowRight size={30} />
              </div>
            </NavLink>
            <hr />
            <NavLink to="/kitchen">
              <div
                className="flex justify-between items-center gap-2 w-30 p-4"
                onClick={() => setVisible(false)}
              >
                <div className="flex gap-4 items-center">
                  <img src={kitchen} className="w-14" />
                  <p className="font-semibold">Kitchen</p>
                </div>
                <MdKeyboardArrowRight size={30} />
              </div>
            </NavLink>
            <hr />
            <NavLink to="/lighting">
              <div
                className="flex justify-between items-center gap-2 w-30 p-4"
                onClick={() => setVisible(false)}
              >
                <div className="flex gap-4 items-center">
                  <img src={light} className="w-14" />
                  <p className="font-semibold">Lighting</p>
                </div>
                <MdKeyboardArrowRight size={30} />
              </div>
            </NavLink>
            <hr />
            <hr />
            <div className="flex flex-col items-start mt-6 px-4">
              <h2 className="text-xl font-semibold mb-4">Shop Other Brands</h2>
              <div className="flex flex-col gap-4">
                <img
                  src={jossandmain}
                  alt="Joss & Main"
                  className="w-[250px] mx-auto transition-transform transform hover:scale-105"
                />
                <img
                  src={allModern}
                  alt="All Modern"
                  className="w-[250px] mt-[-50px] transition-transform transform hover:scale-105"
                />
                <img
                  src={brich}
                  alt="Brich"
                  className="w-[250px] mt-[-60px] transition-transform transform hover:scale-105"
                />
              </div>
            </div>

            <NavLink to="/signin">
              <button className="bg-[#7b189f] text-white  h-14 m-2 rounded-full w-[90%] text-base sm:text-lg">
                Sign In
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <hr />
      <div className="hidden sm:flex flex-row gap-5 items-center h-8 w-[38%] m-auto">
        {links.map((link) => (
          <Link
            className="hover:underline font-semibold text-sm"
            key={link.to}
            to={link.to}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <hr className="hidden sm:block" />
    </>
  );
}
