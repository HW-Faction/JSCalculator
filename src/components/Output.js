import React from "react";

export default function Output(props) {
  return (
    <div id="display" className="outputScreen">
      {props.currentValue}
    </div>
  );
}
