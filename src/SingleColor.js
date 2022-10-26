import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, hex }) => {
  const [alert, SetAlert] = useState(false);
  console.log(alert);
  const rbaColor = rgb.join(",");
  const hexa = rgbToHex(...rgb);
  const clickHandler = () => {
    SetAlert(true);
  };
  useEffect(() => {
    let interval = setTimeout(() => {
      SetAlert(false);
    }, 3000);
    return () => clearInterval(interval);
  }, [alert]);

  return (
    <article
      onClick={clickHandler}
      className={`color`}
      style={{ backgroundColor: `rgb(${rbaColor})` }}
    >
      <p className="color-value">{hexa}</p>
      <p className="percent-value">{weight}%</p>
    </article>
  );
};

export default SingleColor;
