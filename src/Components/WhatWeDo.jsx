import React from "react";
import { FaLeaf, FaTshirt, FaHammer } from "react-icons/fa";

const WhatWeDoPage = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://paramounttextilebd.com/public/frontend/assets/img/page/62a87d8819e16.jpg')",
        }}
      >
        {/* Banner Content */}
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">PRODUCT RANGE</h1>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8 text-primary">What We Do</h1>
          <p className="text-lg mb-12 text-gray-600">
            Innovation of quality products is the main motto of Paramount
            Textile, and through this way, we offer our customers a diversified
            range of products to meet their individual needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Materials Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <FaLeaf className="text-3xl text-green-600" />
                <h2 className="text-xl font-semibold">Our Materials</h2>
              </div>
              <ul className="list-disc pl-5 text-gray-600">
                <li>100% LINEN</li>
                <li>LENZING TENCEL</li>
                <li>LENZING ECOVERO & BIRLA LIVAECO</li>
                <li>LYCRA & T400</li>
                <li>COTTON & WOOL</li>
                <li>RECYCLED POLYESTER MIX</li>
                <li>100% PROCESSED POLYESTER</li>
                <li>COOLMAX MIX</li>
              </ul>
            </div>

            {/* Fabrics Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <FaTshirt className="text-3xl text-blue-600" />
                <h2 className="text-xl font-semibold">Our Fabrics</h2>
              </div>
              <ul className="list-disc pl-5 text-gray-600">
                <li>LUREX</li>
                <li>OXFORD</li>
                <li>TWILL & SATIN</li>
                <li>4-WAY STRETCH</li>
                <li>FLANNEL</li>
                <li>VOILE</li>
                <li>DOUBLE CLOTH</li>
                <li>DIAMOND PEACH</li>
              </ul>
            </div>

            {/* Special Features Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <FaHammer className="text-3xl text-yellow-600" />
                <h2 className="text-xl font-semibold">Special Features</h2>
              </div>
              <ul className="list-disc pl-5 text-gray-600">
                <li>WATER, OIL & SOIL REPELLENT</li>
                <li>EASY CARE & WRINKLE FREE</li>
                <li>MECHANICAL STRETCH</li>
                <li>GLITTER PRINT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoPage;
