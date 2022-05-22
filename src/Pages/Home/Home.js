import React from "react";
import Banner from "../../Components/Banner/Banner";
import ToolsParts from "../../Components/Banner/ToolsParts/ToolsParts";
import BusinessSummary from "../../Components/BusinessSummary/BusinessSummary";
import Reviews from "../../Components/Reviews/Reviews";
const Home = () => {
  return (
    <div className='mx-6'>
      <Banner></Banner>
      <ToolsParts></ToolsParts>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
