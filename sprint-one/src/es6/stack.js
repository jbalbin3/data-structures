class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.key = 0;
  }

  push(val) {
    this.key++;
    this.storage[this.key] = val;
  }

  pop() {
    if(this.key > 0) {
      var returnVal = this.storage[this.key];
      delete this.storage[this.key];
      this.key--;
      return returnVal;
    }
  }

  size() {
    return this.key;
  }
}