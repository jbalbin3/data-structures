var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.inkey = 0;
  this.outkey = 0;
};


Queue.prototype.enqueue = function(value) {
  if (this.inkey === undefined) {
    this.inkey = 0;
    this.outkey = 0;
  }
  this.storage[this.inkey] = value;
  this.inkey++;
};

Queue.prototype.dequeue = function() {
  if (this.outkey === undefined) {
    return;
  }
  var returnResult = this.storage[this.outkey];
  delete this.storage[this.outkey];
  if (this.outkey < this.inkey) {
    this.outkey++;
  }
  return returnResult;
};

Queue.prototype.size = function() {
  return this.inkey - this.outkey;
};
