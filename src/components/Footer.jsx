import { IoLogoLinkedin, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import name from '../assets/name.png'
import col from '../assets/col.png'

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-lime-400">
        {/* Left Side */}
        <div style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} className="flex flex-row">
          <div style={{ width: '40%' }}>
            <h2 className="text-2xl font-bold">Subscribe Newsletter</h2>
            <p className="text-gray-400 mt-2">
              Want to stay up to date on our work and latest news?
            </p>
          </div>

          <div style={{ justifyContent: 'flex-end', width: '40%', height: '40px' }} className="mt-4 flex">
            <input
              type="email"
              placeholder="Your Email..."
              className="flex-1 px-4 py-2 rounded-r-md text-black outline-none"
              style={{ borderRadius: 12, backgroundColor: 'white', padding: 10, color: 'black' }}
            />
            <button style={{ backgroundColor: '#CEFF03', marginLeft: 10, color: 'black' }} className="bg-lime-400 px-6 rounded-r-md font-bold text-black">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Right Side Logo & Text */}
        <div className="flex flex-row">

        <div style={{ marginLeft: 30, margin: 40, width: '30%' }} >
          {/* Logo Image instead of text */}
          <img
            src={name}
            alt="Unhinged AF"
            className="h-10 mb-2"
          />

          <p className="text-gray-400 max-w-sm">
            Forget safe. Forget boring. EXPOSED <br /> is where Gen Z comes to match,
            flex,<br /> and earn.
          </p>
        </div>
        <div>
          <img
            src={col}
            alt="Unhinged AF"
            className="h-10 mb-2"
          />
        </div>
        </div>
      </div>

      {/* Links + Socials */}
      {/* <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
      {/* <div>
          <h3 className="font-bold text-lg mb-3">Quick Link</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-lime-400">»</span> Why Exposed
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lime-400">»</span> Core Features
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lime-400">»</span> FAQ's
            </li>
          </ul>
        </div> */}

      {/* Social Media */}
      {/* <div>
          <h3 className="font-bold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-lime-400 p-2 rounded-full text-black">
              <IoLogoLinkedin size={18} />
            </a>
            <a href="#" className="bg-lime-400 p-2 rounded-full text-black">
              <IoLogoFacebook size={18} />
            </a>
            <a href="#" className="bg-lime-400 p-2 rounded-full text-black">
              <IoLogoInstagram size={18} />
            </a>
            <a href="#" className="bg-lime-400 p-2 rounded-full text-black">
              <FaTiktok size={18} />
            </a>
          </div>
        </div>
      </div> */}

      {/* Copyright */}
      <div className="bg-[#1a1a1a] py-4 text-center text-gray-400 text-sm">
        © 2025 Unhinged AF All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
