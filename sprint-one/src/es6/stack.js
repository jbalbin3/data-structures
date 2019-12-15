class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this._storage = {};
    this._key = 0;
  }

  push(val) {
    this._storage[++this._key] = val;
  }

  pop() {
    if(this._key > 0) {
      var returnVal = this._storage[this._key];
      delete this._storage[this._key];
      this._key--;
      return returnVal;
    }
  }

  size() {
    return this._key;
  }
}