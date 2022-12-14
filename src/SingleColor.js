import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, hex }) => {
  const [alert, SetAlert] = useState(false);
  const rbaColor = rgb.join(",");
  const hexa = rgbToHex(...rgb);
  const clickHandler = () => {
    navigator.clipboard.writeText(hexa);
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
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
