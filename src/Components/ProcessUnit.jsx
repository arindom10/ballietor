import React from "react";

const ProcessUnit = () => {
  const processUnits = [
    {
      title: "PRINTING",
      imgSrc:
        "https://paramounttextilebd.com/public/frontend/assets/img/bu/1.jpg",
    },
    {
      title: "DYEING",
      imgSrc:
        "https://paramounttextilebd.com/public/frontend/assets/img/bu/2.jpg",
    },
    {
      title: "FINISHING",
      imgSrc:
        "https://paramounttextilebd.com/public/frontend/assets/img/bu/3.jpg",
    },
    {
      title: "SOLID DYEING",
      imgSrc:
        "https://paramounttextilebd.com/public/frontend/assets/img/bu/4.jpg",
    },
    {
      title: "WEAVING​",
      imgSrc:
        "https://paramounttextilebd.com/public/frontend/assets/img/bu/5.jpg",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto py-10">
      <h2 className="text-center text-2xl font-bold mb-6">PROCESS UNIT</h2>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {processUnits.map((unit, index) => (
          <div key={index} className="text-center">
            <img
              src={unit.imgSrc}
              alt={unit.title}
              className="w-full h-40 object-cover rounded shadow-lg"
            />
            <p className="mt-4 text-lg font-medium">{unit.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessUnit;
