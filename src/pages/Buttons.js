import React from "react";
import ButtonGrid from "../components/Buttons/ButtonGrid";
import Button from "../components/Buttons/Button";
import ButtonGroup from "../components/Buttons/ButtonGroup";

const Buttons = () => {
  return (
    <div>
      <ButtonGrid />
      <div className=" m-16"></div>
      <Button />
      <div className=" m-16"></div>
      <ButtonGroup />
      <div className=" m-16"></div>
    </div>
  );
};

export default Buttons;
