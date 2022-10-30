import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";


function App() {
  const [color, Setcolor] = useState('');
  const [error, Seterror] = useState(false);
  const [list, Setlist] = useState(new Values("#f15025").all(10));
  const handleChange = (e) => {
    let colors = e.target.value;
    Setcolor(colors);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    try {
      let colors= new Values(color).all(10)
      Setlist(colors);
    } catch (error) {
      Seterror(true)
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={submitHandler}>
          <input
            className={`${error ? "error" : null}`}
            type="text"
            value={color}
            onChange={handleChange}
            placeholder="#f15025"
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list?.map((colors, index) => {
          return <SingleColor key={index} {...colors} />;
        })}
      </section>
    </>
  );
}

export default App;
