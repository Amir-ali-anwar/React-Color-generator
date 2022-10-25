import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, Setcolor] = useState("#f15025");
  const [error, Seterror] = useState(false);
  const [list, Setlist] = useState([]);
  console.log(list);
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
          <input type="text" value={color} onChange={handleChange} />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <SingleColor />
    </>
  );
}

export default App;
