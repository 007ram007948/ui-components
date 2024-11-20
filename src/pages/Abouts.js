import React from "react";
import About1, { About1Code } from "../components/About/About1";
import About2, { about2Code } from "../components/About/About2";
import ComponentShowcase from "../layoutComponents/ComponentShowcase";

const Abouts = () => {
  return (
    <div>
      <ComponentShowcase
        pageTitle="About"
        components={[
          { component: <About2 />, codeString: about2Code },
          { component: <About1 />, codeString: About1Code },
        ]}
      />
    </div>
  );
};

export default Abouts;
