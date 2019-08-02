import React from "react";

export default class Output extends React.Component {
  render() {
    return (
      <div id="display" className="outputScreen">
        {this.props.currentValue}
      </div>
    );
  }
}
