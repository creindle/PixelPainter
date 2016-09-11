const store = require('../reducers');

export default {
  setColor,
  clearColor
}

export function setColor(x, y, color) {
  return {
    type: "SET_COLOR",
    data: {
      x: x,
      y: y,
      color: color
    }
  };
}

export function clearColor() {
  return {
    type: "CLEAR_CANVAS",
    data: undefined
  };
}