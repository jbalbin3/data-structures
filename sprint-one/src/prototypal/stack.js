var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance._storage = {};
  someInstance._key = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this._storage[++this._key] = val;
};

stackMethods.pop = function() {
  if(this._key > 0) {
    var returnVal = this._storage[this._key];
    delete this._storage[this._key];
    this._key--;
    return returnVal;
  }
};

stackMethods.size = function() {
  return this._key;
};
