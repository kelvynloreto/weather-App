import React from "react";
import celsius from '../icons/celsius.png'
import farenheit from '../icons/farenheit.png'
const ButtonChangeDegrees = ({ tempConverter }) => {
  return (
    <button className="change_degrees"  onClick={tempConverter}>
      <img src={celsius} alt="" />
      <box-icon name="transfer"></box-icon>
      <img src={farenheit} alt="" />
    </button>
   
  );
};

export default ButtonChangeDegrees;
