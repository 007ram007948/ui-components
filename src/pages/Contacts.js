import React from "react";
import Contact from "../components/Contacts/Contact";
import Contact2 from "../components/Contacts/Contact2";
import Contact3 from "../components/Contacts/Contact3";
import Contact4 from "../components/Contacts/Contact4";
import Map from "../components/Contacts/Map";

const Contacts = () => {
  return (
    <div>
      <Contact />
      <div className=" m-16"></div>
      <Contact2 />
      <div className=" m-16"></div>
      <Contact3 />
      <div className=" m-16"></div>
      <Contact4 />
      <div className=" m-16"></div>
      <Map />
      <div className=" m-16"></div>
    </div>
  );
};

export default Contacts;
