import React from "react";
import Banner from "../../Components/Banner/Banner";
import ToolsParts from "../../Components/Banner/ToolsParts/ToolsParts";
import BusinessSummary from "../../Components/BusinessSummary/BusinessSummary";
import Contact from "../../Components/Contact/Contact";
import Reviews from "../../Components/Reviews/Reviews";
import WhatWeProvide from "../../Components/WhatWeProvide/WhatWeProvide";
const Home = () => {
  return (
    <div className='mx-6'>
      <Banner></Banner>
      <ToolsParts></ToolsParts>
      <BusinessSummary></BusinessSummary>
      <WhatWeProvide></WhatWeProvide>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
};

export default Home;
