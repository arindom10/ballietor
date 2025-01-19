import React from "react";

const GlobalBrands = () => {
  const brandLogos = [
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/Uniqlo.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/H_M.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/KIABI.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/LCWAIKIKI.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/Express.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/Levis.png",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/Street)ne.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/VARNER.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/Jack_jones.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/george.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/CARRERA.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/1.png",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/jules.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/C_A.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/Marubeni.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/target.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/ESPRIT.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/partners/Davidhoward.jpg",
  ];

  return (
    <div className=" py-10">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          Global Brands Relying on Ballietor
        </h2>
        <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {brandLogos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white shadow-md rounded-md p-4"
            >
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalBrands;
