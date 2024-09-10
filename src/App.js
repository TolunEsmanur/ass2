import List from "./components/List";
import data from "./helper/data";
import React, { useState } from "react";
function App() {
  const [current, setCurrent] = useState(0);
  const handleNext = () => {
    
    current >= 0 && setCurrent(current + 5);
    current === data.length && setCurrent(0);
  };

  // const handleNext = () => {

  //   if (current === data.length) {
  //     setCurrent(0);
  //   } else if (current >= 0) {
  //     setCurrent(current + 5);
  //   }
  // };

  const handlePrev = () =>
    current - 5 < 0 ? setCurrent(0) : setCurrent(current - 5);

  return (
    <main>
      <section className="container">
        <h3> Employee List</h3>

        <h5>
          (Employees
          {current === data.length
            ? setCurrent(0)
            : current === 0
            ? 1
            : current + 0}
          to
          {current + 5} )
          </h5>
          
        <List current={current} />
        <div className="btns">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </section>
    </main>
  );
}
export default App;