class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.inkey = 0;
    this.outkey = 0;
  }
  enqueue(value) {
    if (this.inkey === undefined) {
      this.inkey = 0;
      this.outkey = 0;
    }
    this.storage[this.inkey] = value;
    this.inkey++;
  }

  dequeue() {
    if (this.outkey === undefined) {
      return;
    }
    var returnResult = this.storage[this.outkey];
    delete this.storage[this.outkey];
    if (this.outkey < this.inkey) {
      this.outkey++;
    }
    return returnResult;
  }

  size() {
    return this.inkey - this.outkey;
  }
}
