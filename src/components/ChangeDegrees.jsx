import React from "react";

const ChangeDegrees = ({ tempConverter }) => {
  return (
    <button  onClick={tempConverter}>
      <img src="/src/icons/celsius.png" alt="" />
      <box-icon name="transfer"></box-icon>
      <img src="/src/icons/farenheit.png" alt="" />
    </button>
  );
};

export default ChangeDegrees;
