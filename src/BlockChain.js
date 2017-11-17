import React, { Component } from 'react';
import './BlockChain.css';
import Block from './Block';

class BlockChain extends Component {
  render() {
    const {blockChain} = this.props;

    return (
      <div className="block-chain">
        <strong>Number of Blocks</strong>: {blockChain.length}
        {blockChain.blocks.map(this._renderBlock)}
      </div>
    );
  }

  _renderBlock(block) {
    return (
      <Block block={block} key={block.index} />
    );
  }
}

export default BlockChain;
