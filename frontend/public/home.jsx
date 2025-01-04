import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Trending  from "../components/Trending";  // Named import


function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Trending />
      <Footer />
    
    </>
  );
}

export default Home;

