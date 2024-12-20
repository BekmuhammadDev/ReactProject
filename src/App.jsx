import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { ClipLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#3498db" size={50} />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
