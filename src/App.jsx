import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import WhatWeDo from "./Components/WhatWeDo";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
