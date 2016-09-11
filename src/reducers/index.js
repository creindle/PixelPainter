const redux = require('redux');
const canvasReducer = require('./canvas');
const palletReducer = require('./pallet');

const rootReducer = redux.combineReducers({
  canvas: canvasReducer,
  pallet: palletReducer
});

const finalCreateStore = redux.compose(
  (window.devToolsExtension) ? window.devToolsExtension
  : function (x) { return x; }
);

const store = finalCreateStore(
  rootReducer, {}
);

module.exports = store;