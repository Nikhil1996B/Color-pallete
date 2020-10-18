import React, { useState } from "react";
import style from "./App.css";

const Canvas = () => {};

function App() {
  //Initial state, when no color is generated
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(null);
  const [select, setSelect] = useState("#ffffff");
  let newColor = [];
  //Random color genrator
  const randomColorGenerator = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };
  // Random colors
  const randomColor = () => {
    for (let i = 0; i < count; i++) {
      let randomColor = randomColorGenerator();
      newColor.push({
        [`#${randomColor}`]: `#${randomColor}`,
      });
      setColor({ newColor });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    randomColor();
  };
  return (
    <>
      <div className={"container"}>
        <section id={"color-palette"} className={"left-section"}>
          <h3>
            <b>Pallette</b>
          </h3>
          <br />
          <hr />
          <div className={"row marginleft"}>
            {color ? (
              color.newColor.map((value, index) => (
                <div
                  className={`col canvas-box`}
                  style={{ backgroundColor: `${Object.keys(value)}` }}
                  key={index}
                  onClick={() => setSelect(Object.keys(value))}
                ></div>
              ))
            ) : (
              <div>
                <h3>Nothing Selected</h3>
                <p>Please add the number to generate the pallete</p>
              </div>
            )}
          </div>
        </section>
        <aside
          aria-label={"color palette form generator"}
          className={"right-section"}
        >
          <form onSubmit={handleSubmit}>
            <label htmlFor="">
              <h3>
                <b>Config Panel</b>
              </h3>
              <hr />
              <input
                type={"number"}
                min={"1"}
                max={"200"}
                className={"form-control"}
                onChange={(e) => setCount(e.target.value)}
              />
            </label>
            <br />
            <button
              type={"submit"}
              className={"btn btn-primary"}
              style={{ marginRight: "10px" }}
            >
              Generate
            </button>
            <button
              onClick={() => {
                setCount(0);
                setColor(null);
              }}
              className={"btn btn-danger"}
            >
              Clear
            </button>
          </form>
          <br />
          <div>
            <h3>Selected:</h3>
            <hr />
            <div
              className="selected-box"
              style={{ backgroundColor: `${select}` }}
            ></div>
          </div>
          <div>
            <p>
              <b>Hex:</b> {select !== "#ffffff" ? select : "Nothing Selected"}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}

export default App;
