import React from 'react';
import Pallet from './Pallet';
import Pixel from './Pixel';
import { connect } from 'react-redux';

class Canvas extends React.Component {
  render () {
    return (
      <div
        onClick={this.props.handleClick}
        className = {`${this.props.status} `}
      >
      )
  }
}

export default Canvas;