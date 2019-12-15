var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    _storage: {},
    _inkey: 0,
    _outkey: 0
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this._storage[this._inkey++] = value;
};

queueMethods.dequeue = function() {
  var returnResult = this._storage[this._outkey];
  if (this._outkey < this._inkey) {
    delete this._storage[this._outkey];
    this._outkey++;
  }
  return returnResult;
};

queueMethods.size = function() {
  return this._inkey - this._outkey;
};