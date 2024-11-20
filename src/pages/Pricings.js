import React from "react";
import Pricing from "../components/Pricings/Pricing";
import Pricing1 from "../components/Pricings/Pricing1";

const Pricings = () => {
  return (
    <div>
      <Pricing />
      <div className=" m-16"></div>
      <Pricing1 />
      <div className=" m-16"></div>
    </div>
  );
};

export default Pricings;
