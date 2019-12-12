var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.key = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.key++;
  this.storage[this.key] = val;
};

stackMethods.pop = function() {
  if(this.key > 0) {
    var returnVal = this.storage[this.key];
    delete this.storage[this.key];
    this.key--;
    return returnVal;
  }
};

stackMethods.size = function() {
  return this.key;
};
