import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'; // Import the icons from react-icons

export default function Footer() {
  // Conditionally render the footer based on the current route
  if (
    location.pathname === "/signin" ||
    location.pathname === "/login" ||
    location.pathname === "/error"
  ) {
    return null;
  }

  return (
    <div className="w-full mt-20">
      {/* Banner Image */}
      <img
        src="https://assets.wfcdn.com/im/20043935/resize-h312-w2000%5Ecompr-r85/2762/276204445/attention%2C_waybors%21_don%27t_miss_exclusive_deals_and_perks_on_the_app._download_the_app.__276204445.jpg"
        alt="banner"
        className="w-full h-auto"
      />

      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-[90%] lg:w-[70%] mx-auto py-10">
        {/* Left Section: Text and Policy */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <p className="font-bold text-2xl">Be the first to know about our best deals!</p>
          <a href="#" className="underline text-[#7b189f] text-xl font-semibold">
            Privacy Policy
          </a>
        </div>

        {/* Right Section: Email Form */}
        <form className="flex w-full max-w-md h-[50px]">
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-240 rounded-l px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-[#7b189f] text-white px-4 py-2 rounded-r hover:bg-purple-700"
          >
            Submit
          </button>
        </form>
      </div>
      <hr />

      <div className="text-left p-10">
        <p className="text-lg font-semibold">WayFair clone</p>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4">
          <a href="https://github.com/Sayeed613" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
            <FaGithub size={24} className='text-[#7b189f]' />
          </a>
          <a href="https://www.linkedin.com/in/sayeed-ahmed-13474b225/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
            <FaLinkedin size={24}  className='text-[#7b189f]' />
          </a>
          <a href="https://sayeedahmed08.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
            <FaGlobe size={24}   className='text-[#7b189f]'/>
          </a>
        </div>
      </div>
    </div>
  );
}
