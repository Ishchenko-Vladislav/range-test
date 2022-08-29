import React from "react";
import { styleType } from "./type";

function Circle({ widthT, heightT, borderWeightT, radius, bottomT, leftT, rightT, topT, customT }: styleType) {
  let styleCircle = {};
  if (customT) {
    styleCircle = {
      width: `${widthT}px`,
      height: `${heightT}px`,
      borderLeft: `${leftT}px solid black`,
      borderRight: `${rightT}px solid black`,
      borderTop: `${topT}px solid black`,
      borderBottom: `${bottomT}px solid black`,
      borderRadius: `${radius}%`,
    };
  } else {
    styleCircle = {
      width: `${widthT}px`,
      height: `${heightT}px`,
      borderLeft: `${borderWeightT}px solid black`,
      borderRight: `${borderWeightT}px solid black`,
      borderTop: `${borderWeightT}px solid black`,
      borderBottom: `${borderWeightT}px solid black`,
      borderRadius: `${radius}%`,
    };
  }

  return (
    <div style={{ width: 300, height: 300, border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={styleCircle}></div>
    </div>
  );
}

export default Circle;
