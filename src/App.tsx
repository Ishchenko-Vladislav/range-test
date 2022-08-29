import React, { useState } from "react";
import "./App.css";
import Circle from "./component/cirkle";
import { styleType } from "./component/type";

function App() {
  const [width, setWidth] = useState<string | number>(100);
  const [height, setHeight] = useState<string | number>(100);
  const [radius, setRadius] = useState<string | number>(100);
  const [weight, setWeight] = useState<string | number>(2);
  const [custom, setCustom] = useState<boolean>(false);

  const [top, setTop] = useState<string | number>(2);
  const [right, setRight] = useState<string | number>(2);
  const [left, setLeft] = useState<string | number>(2);
  const [bottom, setBottom] = useState<string | number>(2);
  const style: styleType = {
    heightT: +height,
    widthT: +width,
    borderWeightT: +weight,
    radius: +radius,
    topT: +top,
    rightT: +right,
    leftT: +left,
    bottomT: +bottom,
    customT: custom,
  };
  function f1(e: any) {
    console.log(e.target.value);
  }
  return (
    <div className="App">
      <Circle {...style} />
      <div style={{ display: "flex" }}>
        <span>width</span>
        <input value={width} onChange={(e) => setWidth(e.target.value)} type="range" min={0} max={200} />
      </div>
      <div style={{ display: "flex" }}>
        <span>height</span>
        <input value={height} onChange={(e) => setHeight(e.target.value)} type="range" min={0} max={200} />
      </div>
      <div style={{ display: "flex" }}>
        <span>weight</span>
        <input disabled={custom} value={weight} onChange={(e) => setWeight(e.target.value)} type="range" min={0} max={10} />
      </div>
      <div style={{ display: "flex" }}>
        <span>radius</span>
        <input value={radius} onChange={(e) => setRadius(e.target.value)} type="range" min={0} max={50} />
      </div>

      <div style={{ display: "flex" }}>
        <span>top</span>
        <input disabled={!custom} value={top} onChange={(e) => setTop(e.target.value)} type="range" min={0} max={50} />
      </div>
      <div style={{ display: "flex" }}>
        <span>bottom</span>
        <input disabled={!custom} value={bottom} onChange={(e) => setBottom(e.target.value)} type="range" min={0} max={50} />
      </div>
      <div style={{ display: "flex" }}>
        <span>right</span>
        <input disabled={!custom} value={right} onChange={(e) => setRight(e.target.value)} type="range" min={0} max={50} />
      </div>
      <div style={{ display: "flex" }}>
        <span>left</span>
        <input disabled={!custom} value={left} onChange={(e) => setLeft(e.target.value)} type="range" min={0} max={50} />
      </div>
      <div style={{ display: "flex", position: "relative", top: "-200px", left: "-200px", alignItems: "center" }}>
        <div style={{ marginRight: "20px" }}>custom</div>
        <label className="switch">
          <input onChange={(e) => setCustom((prev) => !prev)} type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default App;
