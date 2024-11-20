import React from "react";
import Faq from "../components/Faqs/Faq";
import Faq1 from "../components/Faqs/Faq1";
// import Faq2 from "../components/Faqs/Faq2";

const Faqs = () => {
  return (
    <div>
      {" "}
      <Faq />
      <div className=" m-16"></div>
      <Faq1 />
      <div className=" m-16"></div>
      {/* <Faq2 />
      <div className=" m-16"></div> */}
    </div>
  );
};

export default Faqs;
