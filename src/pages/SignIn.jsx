import { useNavigate } from "react-router-dom";
import logo from "../assets/wayfair-logo.png";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function SignIn() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phoneNumber) => {
    return phoneNumber.length === 10 && /^[0-9]+$/.test(phoneNumber);
  };

  const validatePassword = (password) => {
    return /[!@#$%^&*(),.?":{}|<>]/.test(password);
  };

  async function handleClick() {
    const newErrors = {
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: ""
    };

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!validatePhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    if (!validatePassword(password)) {
      newErrors.password = "Password must include at least one special character";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.values(newErrors).some(error => error)) {
      setErrors(newErrors);
      Object.values(newErrors).forEach(error => {
        if (error) toast.error(error);
      });
      return;
    }

    try {
      let response = await axios({
        method: 'POST',
        url: 'http://localhost:3000/users',
        data: {
          firstName,
          lastName,
          email,
          phoneNumber,
          password
        }
      });
      console.log("User signed in:", response.data);
      toast.success("Account created successfully!");
      navigate('/login');
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error("Error: Could not sign in. Please try again.");
    }
  }

  function handleLoginRedirect() {
    navigate('/login');
  }

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen px-4">
      <ToastContainer />
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-[90%] lg:max-w-[60%] border-b-2 h-[70px] mb-10">
        <img src={logo} alt="Wayfair Logo" className="w-[150px] sm:w-[170px]" />
        <div className="flex gap-2 items-center">
          <p className="text-sm sm:text-lg font-semibold">Secure Login</p>
          <CiLock size={24} sm={28} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 items-center text-center w-full max-w-[90%] lg:max-w-[60%]">
        <p className="text-lg sm:text-xl font-medium w-full max-w-[300px]">
          Enter your email address to sign in or to create an account
        </p>

        {/* SignIn Input Fields */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full max-w-[90%] lg:max-w-[60%]">
          <div className="relative w-full sm:w-[48%]">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border-2 border-gray-400 p-4 rounded w-full"
            />
          </div>
          <div className="relative w-full sm:w-[48%]">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-2 border-gray-400 p-4 rounded w-full"
            />
          </div>
        </div>
        <div className="relative w-full max-w-[90%] lg:max-w-[60%]">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-400 p-4 rounded w-full"
          />
        </div>
        <div className="relative w-full max-w-[90%] lg:max-w-[60%]">
          <input
            type="number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border-2 border-gray-400 p-4 rounded w-full"
          />
        </div>
        <div className="relative w-full max-w-[90%] lg:max-w-[60%]">
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-400 p-4 rounded w-full"
          />
        </div>
        <div className="relative w-full max-w-[90%] lg:max-w-[60%]">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-2 border-gray-400 p-4 rounded w-full"
          />
        </div>

        {/* Continue Button */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full max-w-[90%] lg:max-w-[60%]">
          <button
            className="bg-[#7b189f] text-white py-3 px-10 rounded w-full sm:w-[48%] mt-4 text-lg"
            onClick={handleClick}
          >
            Sign In
          </button>
          <button
            className="bg-white text-[#7b189f] py-3 px-10 rounded border-[#7b189f] border-2 w-full sm:w-[48%] mt-4 text-lg"
            onClick={handleLoginRedirect}
          >
            Log In
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex justify-center mt-auto py-10">
        <div className="text-gray-500 text-sm flex space-x-4">
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
