const initialState = {
  "colors": "blue",
  "selected": false
};

const reducer = (state = initialState, action) => {
  console.log(state);

  switch (action.type) {
    case "SELECT_COLOR":
      console.log(action);
      return;

    default:
      return state;
  }
}

module.exports = reducer;