import React from "react";
import "./App.css";

import Buttons from "./components/Buttons";
import Output from "./components/Output";
import Formula from "./components/Formula";

localStorage.setItem("example_project", "Javascript Calculator");

// VARS:
const isOperator = /[x/+‑]/,
  endsWithOperator = /[x+‑/]$/;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: "0",
      prevVal: "0",
      formula: "",
      currentSign: "pos",
      lastClicked: ""
    };
  }

  maxDigitWarning = () => {
    this.setState({
      currentVal: "Digit Limit Met",
      prevVal: this.state.currentVal
    });
    setTimeout(() => this.setState({ currentVal: this.state.prevVal }), 1000);
  };

  handleEvaluate = () => {
    if (!this.state.currentVal.includes("Limit")) {
      let expression = this.state.formula;
      if (endsWithOperator.test(expression))
        expression = expression.slice(0, -1);
      expression = expression.replace(/x/g, "*").replace(/‑/g, "-");
      let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
      this.setState({
        currentVal: answer.toString(),
        formula:
          expression.replace(/\*/g, "⋅").replace(/-/g, "‑") + "=" + answer,
        prevVal: answer,
        evaluated: true
      });
    }
  };

  handleOperators = e => {
    if (!this.state.currentVal.includes("Limit")) {
      this.setState({ currentVal: e.target.value, evaluated: false });
      if (this.state.formula.includes("=")) {
        this.setState({ formula: this.state.prevVal + e.target.value });
      } else {
        this.setState({
          prevVal: isOperator.test(this.state.currentVal)
            ? this.state.prevVal
            : this.state.formula,
          formula: isOperator.test(this.state.currentVal)
            ? (this.state.prevVal += e.target.value)
            : (this.state.formula += e.target.value)
        });

        if (
          isOperator.test(this.state.currentVal) &&
          isOperator.test(this.state.prevVal.slice(1, 2))
        ) {
          if (
            this.state.prevVal === "/" ||
            this.state.prevVal.slice(1, 2) === "+" ||
            this.state.prevVal.slice(1, 2) === "x"
          ) {
            console.log("Hello Folks!");
          } else {
            console.log("FINALLY REACH HERE");
            console.log(this.state.formula);
            console.log(this.state.currentVal);
            console.log(this.state.prevVal);
            /*  this.setState({
              prevVal: this.state.formula
            }); */
          }
        }
      }
    }
  };

  handleNumbers = e => {
    if (!this.state.currentVal.includes("Limit")) {
      this.setState({ evaluated: false });
      if (this.state.currentVal.length > 21) {
        this.maxDigitWarning();
      } else if (this.state.evaluated === true) {
        this.setState({
          currentVal: e.target.value,
          formula: e.target.value !== "0" ? e.target.value : ""
        });
      } else {
        this.setState({
          currentVal:
            this.state.currentVal === "0" ||
            isOperator.test(this.state.currentVal)
              ? e.target.value
              : this.state.currentVal + e.target.value,
          formula:
            this.state.currentVal === "0" && e.target.value === "0"
              ? this.state.formula
              : /([^.0-9]0)$/.test(this.state.formula)
              ? this.state.formula.slice(0, -1) + e.target.value
              : this.state.formula + e.target.value
        });
      }
    }
  };

  handleDecimal = () => {
    if (this.state.evaluated === true) {
      this.setState({
        currentVal: "0.",
        formula: "0.",
        evaluated: false
      });
    } else if (
      !this.state.currentVal.includes(".") &&
      !this.state.currentVal.includes("Limit")
    ) {
      this.setState({ evaluated: false });
      if (this.state.currentVal.length > 21) {
        this.maxDigitWarning();
      } else if (
        endsWithOperator.test(this.state.formula) ||
        (this.state.currentVal === "0" && this.state.formula === "")
      ) {
        this.setState({
          currentVal: "0.",
          formula: this.state.formula + "0."
        });
      } else {
        this.setState({
          currentVal: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + ".",
          formula: this.state.formula + "."
        });
      }
    }
  };

  initialize = () => {
    this.setState({
      currentVal: "0",
      prevVal: "0",
      formula: "",
      currentSign: "pos",
      lastClicked: ""
    });
  };

  render() {
    return (
      <div id="CenterTheCal">
        <div className="calculator">
          <Formula formula={this.state.formula.replace(/x/g, "⋅")} />
          <Output currentValue={this.state.currentVal} />
          <Buttons
            evaluate={this.handleEvaluate}
            operators={this.handleOperators}
            initialize={this.initialize}
            decimal={this.handleDecimal}
            numbers={this.handleNumbers}
          />
        </div>
      </div>
    );
  }
}

export default App;
