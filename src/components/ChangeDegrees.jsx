import React from "react";
import celsius from '../icons/celsius.png'
import farenheit from '../icons/farenheit.png'
const ChangeDegrees = ({ tempConverter }) => {
  return (
    <button  onClick={tempConverter}>
      <img src={celsius} alt="" />
      <box-icon name="transfer"></box-icon>
      <img src={farenheit} alt="" />
    </button>
  );
};

export default ChangeDegrees;
