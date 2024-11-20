import React from "react";
import Team from "../components/Teams/Team";
import Team1 from "../components/Teams/Team1";
import Team2 from "../components/Teams/Team2";

const Teams = () => {
  return (
    <div>
      {" "}
      <Team />
      <div className=" m-16"></div>
      <Team1 />
      <div className=" m-16"></div>
      <Team2 />
      <div className=" m-16"></div>
    </div>
  );
};

export default Teams;
