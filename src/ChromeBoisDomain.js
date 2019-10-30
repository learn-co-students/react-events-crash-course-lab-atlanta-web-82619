import React, { Component } from "react";
import {
  drawChromeBoiAtCoords,
  toggleCycling,
  resize
} from "./canvasHelpers.js";

export default class ChromeBoisDomain extends Component {
  handleMouseMove = e => {
    drawChromeBoiAtCoords(e.clientX, e.clientY);
  };

  handleToggleCycling = () => {
    toggleCycling();
  };

  handleKeyPress = e => {
    if (e.key === "a") {
      return resize("+");
    }
    if (e.key === "s") {
      return resize("-");
    }
  };

  /* When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleToggleCycling}
        onKeyPress={this.handleKeyPress}
        width="900"
        height="600"
        tabIndex="0"
      ></canvas>
    );
  }
}
