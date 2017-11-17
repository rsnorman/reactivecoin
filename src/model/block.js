import crypto from 'crypto';

class Block {
  constructor(index, timestamp, data, previousHash) {
    this.index = index
    this.timestamp = timestamp
    this.data = data
    this.previousHash = previousHash
    this.hash = this._getHashBlock();
  }

  _getHashBlock() {
    return crypto
      .createHash('md5')
      .update(`${this.index}${this.timestamp}${this.data}${this.previousHash}`)
      .digest('hex')
  }
}

export default Block;
