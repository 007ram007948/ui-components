import React from "react";
import Features1 from "../components/Features/Features1";
import Card from "../components/Features/Card";
import Service from "../components/Features/Services";

const Features = () => {
  return (
    <div>
      {" "}
      <Features1 />
      <div className=" m-16"></div>
      <Card />
      <div className=" m-16"></div>
      <Service />
      <div className=" m-16"></div>
    </div>
  );
};

export default Features;
