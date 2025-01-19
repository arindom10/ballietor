import React from "react";
import BannerCarousel from "./BannerCarousel ";
import ProcessUnit from "./ProcessUnit";
import ProductionStats from "./ProductionStats";
import CertificationSection from "./CertificationSection";
import GlobalBrands from "./GlobalBrands";

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <ProcessUnit />
      <ProductionStats />
      <CertificationSection />
      <GlobalBrands />
    </div>
  );
};

export default Home;
