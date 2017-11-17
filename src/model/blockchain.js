import Block from './block'

class BlockChain {
  constructor() {
    this.blocks = [this._createGenesisBlock()];
    this.length = 1;
  }

  addBlock(data) {
    const index = this.blocks.length;
    const previousHash = this.blocks[index - 1].hash;

    this.blocks = [...this.blocks, new Block(index, new Date(), data, previousHash)];
    this.length = this.blocks.length;

    return this.blocks[this.length - 1];
  }

  _createGenesisBlock() {
    return new Block(0, new Date(), 'Genesis Block', '0');
  }
}

export default BlockChain;
