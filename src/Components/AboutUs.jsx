import React from "react";

const AboutUs = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-primary">About Us</h1>
        <p className="text-lg mb-12 text-gray-600">
          Welcome to Ballietor! We are a dedicated team providing top-notch
          services and solutions to our customers. At Ballietor, we believe in
          innovation, customer satisfaction, and excellence in every aspect of
          our work.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
          <p className="text-lg text-gray-700">
            Our team is led by Victor J. Corbin, an experienced professional who
            is passionate about delivering high-quality results. With years of
            experience in the industry, Victor brings a wealth of knowledge and
            expertise to Ballietor.
          </p>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-lg text-gray-700">
            Have any questions or inquiries? Feel free to reach out to us!
            Here's how you can contact Victor:
          </p>
          <div className="mt-4">
            <p className="text-lg text-gray-600">
              <strong>Name:</strong> Victor J. Corbin
            </p>
            <p className="text-lg text-gray-600">
              <strong>Phone:</strong> 618-385-2987
            </p>
            <p className="text-lg text-gray-600">
              <strong>Email:</strong> victorJCorbin@jourrapide.com
            </p>
            <p className="text-lg text-gray-600">
              <strong>Email:</strong> victorjcorbin@ballietor.com
            </p>
            <p className="text-lg text-gray-600">
              <strong>Address:</strong> 1406 Sherwood Circle Quaker Gap, NC
              27025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
