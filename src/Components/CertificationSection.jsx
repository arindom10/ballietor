import React from "react";

const CertificationSection = () => {
  const certifications = [
    "https://paramounttextilebd.com/public/frontend/assets/img/certification/Organic100.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/certification/Higg_Index.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/certification/Global_Recycle.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/certification/3.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/certification/4.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/certification/5.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/certification/2.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/certification/1.jpg",
  ];

  return (
    <div className="max-w-screen-lg mx-auto py-10">
      <h2 className="text-center text-2xl font-bold mb-6">CERTIFICATION</h2>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {certifications.map((src, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={src}
              alt={`Certification ${index + 1}`}
              className="w-32 h-32 object-contain rounded shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationSection;
