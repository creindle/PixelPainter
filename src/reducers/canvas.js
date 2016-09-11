const initialState = [
    [ "white" ],
    [ "white" ]
  ];

const reducer = (state = initialState, action) => {
  console.log(state);

  switch (action.type) {
    case "SET_COLOR":
      console.log(action);
      return state;

    default:
      return state;
  }
}

module.exports = reducer;