var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) { // O(n) linear time complexity
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) { // O(n) linear time complexity
  if (this._storage.includes(item)) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) { // O(n) linear time complexity
  var i = this._storage.indexOf(item);
  if (i !== -1) {
    this._storage.splice(i, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
