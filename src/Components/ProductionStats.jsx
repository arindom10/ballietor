import React from "react";

const ProductionStats = () => {
  const stats = [
    { title: "YARN DYEING", value: "1100", unit: "Tons/Month" },
    { title: "WEAVING", value: "5.01", unit: "M Yards/Month" },
    { title: "SOLID DYEING", value: "3.00", unit: "M Yards/Month" },
    { title: "PRINTING", value: "2.51", unit: "M Yards/Month" },
    { title: "DIGITAL PRINTING", value: "0.30", unit: "M Yards/Month" },
    { title: "FINISHING", value: "7.19", unit: "M Yards/Month" },
  ];

  return (
    <div
      className="bg-cover bg-center py-10"
      style={{
        backgroundImage: `url('https://paramounttextilebd.com/public/frontend/assets/img/bg3.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-50 py-10">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800 text-white text-center py-6 px-4 rounded-md shadow-lg"
            >
              <h3 className="text-lg font-semibold">{stat.title}</h3>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
              <p className="text-sm mt-1">{stat.unit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductionStats;
