class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this._storage = {};
    this._inkey = 0;
    this._outkey = 0;
  }
  enqueue(value) {
    this._storage[this._inkey++] = value;
  }

  dequeue() {
    var returnResult = this._storage[this._outkey];
    if (this._outkey < this._inkey) {
      delete this._storage[this._outkey];
      this._outkey++;
    }
    return returnResult;
  }

  size() {
    return this._inkey - this._outkey;
  }
}
