var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._inkey = 0;
  this._outkey = 0;
};


Queue.prototype.enqueue = function(value) {
  this._storage[this._inkey++] = value;
};

Queue.prototype.dequeue = function() {
  var returnResult = this._storage[this._outkey];
  if (this._outkey < this._inkey) {
    delete this._storage[this._outkey];
    this._outkey++;
  }
  return returnResult;
};

Queue.prototype.size = function() {
  return this._inkey - this._outkey;
};
