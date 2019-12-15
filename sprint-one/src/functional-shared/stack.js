var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    _storage: {},
    _key: 0
  };
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this._storage[++this._key] = val;
};

stackMethods.pop = function() {
  if (this._key > 0) {
    var returnVal = this._storage[this._key];
    delete this._storage[this._key];
    this._key--;
    return returnVal;
  }
};

stackMethods.size = function() {
  return this._key;
};
