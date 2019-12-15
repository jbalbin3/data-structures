var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._key = 0;
};

Stack.prototype.push = function(val) {
  this._storage[++this._key] = val;
};

Stack.prototype.pop = function() {
  if(this._key > 0) {
    var returnVal = this._storage[this._key];
    delete this._storage[this._key];
    this._key--;
    return returnVal;
  }
};

Stack.prototype.size = function() {
  return this._key;
};