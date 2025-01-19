import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg font-bold mb-6">
          If You Have Any Query, Feel Free To Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {/* Address */}
          <div>
            <div className="text-red-500 mb-2">
              <i className="fas fa-map-marker-alt text-2xl"></i>
            </div>
            <p>1406 Sherwood Circle</p>
            <p>Quaker Gap, NC 27025</p>
          </div>
          {/* Working Hours */}
          <div>
            <div className="text-red-500 mb-2">
              <i className="fas fa-clock text-2xl"></i>
            </div>
            <p>Saturday – Thursday</p>
            <p>09am to 06pm</p>
          </div>
          {/* Phone Number */}
          <div>
            <div className="text-red-500 mb-2">
              <i className="fas fa-phone-alt text-2xl"></i>
            </div>
            <p>+618-385-2987</p>
          </div>
          {/* Email Address */}
          <div>
            <div className="text-red-500 mb-2">
              <i className="fas fa-envelope text-2xl"></i>
            </div>
            <p>VictorJCorbin@jourrapide.com</p>
          </div>
        </div>

        {/* Email Subscription Form */}
        <div className="mt-8 text-center">
          <form className="flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full md:w-1/2 rounded-md text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="mb-4">
            © 2021-2025 <span className="text-blue-400">Ballietor</span>. All
            Rights Reserved By CIRCLE INS
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4">
            <a href="#" className="text-blue-500 hover:text-white">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-white">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a href="#" className="text-red-500 hover:text-white">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
