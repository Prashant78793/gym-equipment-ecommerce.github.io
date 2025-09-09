import React from 'react';
import Banner from './Banner';
import Topsellers from './Topsellers';
import Cloth from './Cloth';
import Ai from './Ai'; // ✅ Import Ai component

const Home = () => {
  return (
    <>
      <Banner />
      <Topsellers />
      <Cloth />
      <Ai /> {/* ✅ Add Ai component here */}
    </>
  );
};

export default Home;
