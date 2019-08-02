import React from "react";

localStorage.setItem("example_project", "Javascript Calculator");

// VARS:
const clearStyle = { background: "#ac3939" },
  operatorStyle = { background: "#666666" },
  equalsStyle = {
    background: "#004466",
    position: "absolute",
    height: 130,
    bottom: 5
  };

export default function Buttons(props) {
  return (
    <div>
      <button
        id="clear"
        value="AC"
        onClick={props.initialize}
        className="jumbo"
        style={clearStyle}
      >
        AC
      </button>
      <button
        id="divide"
        value="/"
        onClick={props.operators}
        style={operatorStyle}
      >
        /
      </button>
      <button
        id="multiply"
        value="x"
        onClick={props.operators}
        style={operatorStyle}
      >
        x
      </button>
      <button id="seven" value="7" onClick={props.numbers}>
        7
      </button>
      <button id="eight" value="8" onClick={props.numbers}>
        8
      </button>
      <button id="nine" value="9" onClick={props.numbers}>
        9
      </button>
      <button
        id="subtract"
        value="‑"
        onClick={props.operators}
        style={operatorStyle}
      >
        -
      </button>
      <button id="four" value="4" onClick={props.numbers}>
        4
      </button>
      <button id="five" value="5" onClick={props.numbers}>
        5
      </button>
      <button id="six" value="6" onClick={props.numbers}>
        6
      </button>
      <button
        id="add"
        value="+"
        onClick={props.operators}
        style={operatorStyle}
      >
        +
      </button>
      <button id="one" value="1" onClick={props.numbers}>
        1
      </button>
      <button id="two" value="2" onClick={props.numbers}>
        2
      </button>
      <button id="three" value="3" onClick={props.numbers}>
        3
      </button>
      <button id="zero" value="0" onClick={props.numbers} className="jumbo">
        0
      </button>
      <button id="decimal" value="." onClick={props.decimal}>
        .
      </button>
      <button
        id="equals"
        value="="
        onClick={props.evaluate}
        style={equalsStyle}
      >
        =
      </button>
    </div>
  );
}
