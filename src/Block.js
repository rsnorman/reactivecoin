import React, { Component } from 'react';
import './Block.css'

class Block extends Component {
  render() {
    const {block} = this.props;

    return (
      <div className="block">
        Block {block.index} containing {JSON.stringify(block.data)} with hash ({block.hash}) created at {block.timestamp.toString()}
      </div>
    );
  }
}

export default Block;
