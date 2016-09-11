import React from 'react';
import { connect } from 'react-redux';

import {
  setColor,
} from '../actions/canvas'

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

class App extends React.Component {
  constructor (props) {
    super(props);
    this.settingColor = () => {
      return this.props.setColor(0, 0, "Purple");
    };
  }
  render () {
    console.log(this.props.filter);
    return (
      <div>
        <button onClick={this.settingColor}>
        Testing
        </button>
      </div>
    );
  };
}

export default connect(mapStateToProps, {
  setColor,
})(App);