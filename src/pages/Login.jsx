import { useContext, useState } from "react";
import logo from "../assets/wayfair-logo.png";
import { CiLock } from "react-icons/ci";
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    login,
    authDetails: { isLoggedIn },
  } = useContext(AuthContext);

  async function handleClick() {
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long.");
      return;
    }

    try {
      let response = await axios({
        method: "POST",
        url: "http://localhost:3000/users",
        data: {
          email,
          password,
        },
      });
      login(response.data.id);
      toast.success("Successfully logged in!");

    } catch (error) {
      if (error.response) {
        toast.error("Invalid email or password.");
      } else {
        toast.error("Network error. Please try again.");
      }
      console.error(error);
    }
  }
  if (isLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen px-4 sm:px-8 lg:px-12">
      <ToastContainer />
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[60%] border-b-2 h-[70px] mb-10">
        <img
          src={logo}
          alt="Wayfair Logo"
          className="w-[120px] sm:w-[150px] lg:w-[170px]"
        />
        <div className="flex gap-2 items-center">
          <p className="text-base sm:text-lg lg:text-xl font-semibold">
            Secure Login
          </p>
          <CiLock size={24} sm={28} lg={32} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 items-center text-center w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[60%]">
        <p className="text-base sm:text-lg lg:text-xl font-medium">
          Enter your email address and password to login to your account
        </p>

        {/* Login Input Fields */}
        <div className="flex flex-col gap-4 items-center ">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email Address"
            className="border-2 border-gray-400 p-4 rounded w-full sm:w-[90%] lg:w-[420px]"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter Password"
            className="border-2 border-gray-400 p-4 rounded w-full sm:w-[90%] lg:w-[420px]"
          />
        </div>

        {/* Login Button */}
        <div className="flex flex-col sm:flex-row gap-4 items-center  max-w-[90%] sm:max-w-[80%] lg:max-w-[60%]">
          <button
            className="bg-white text-[#7b189f] py-3 px-8 rounded w-full sm:w-[48%] lg:w-[200px] text-base sm:text-lg border-[#7b189f] border-2"
            onClick={handleClick}
          >
            Login
          </button>
          <Link to="/signin">
            <button className="bg-[#7b189f] text-white py-3 px-8 rounded w-full sm:w-[48%] lg:w-[200px] text-base sm:text-lg">
              Sign In
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex justify-center mt-auto py-10">
        <div className="text-gray-500 text-xs sm:text-sm flex space-x-4">
          <a href="#" className="hover:underline">
            Privacy & Terms
          </a>
          <a href="#" className="hover:underline">
            Your Privacy Rights and Choices
          </a>
        </div>
      </div>
    </div>
  );
}
