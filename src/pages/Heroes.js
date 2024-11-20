import React from "react";
import Hero from "../components/Heroes/Hero";
import Hero2 from "../components/Heroes/Hero2";
import Hero3 from "../components/Heroes/Hero3";
import Hero4 from "../components/Heroes/Hero4";
import Hero5 from "../components/Heroes/Hero5";
import Hero6 from "../components/Heroes/Hero6";
import Hero7 from "../components/Heroes/Hero7";
import Hero8 from "../components/Heroes/Hero8";

const Heroes = () => {
  return (
    <div>
      <Hero />
      <div className=" m-16"></div>
      <Hero2 />
      <div className=" m-16"></div>
      <Hero3 />
      <div className=" m-16"></div>
      <Hero4 />
      <div className=" m-16"></div>
      <Hero5 />
      <div className=" m-16"></div>
      <Hero6 />
      <div className=" m-16"></div>
      <Hero7 />
      <div className=" m-16"></div>
      {/* <Hero8 /> */}
      <div className=" m-16"></div>
    </div>
  );
};

export default Heroes;
