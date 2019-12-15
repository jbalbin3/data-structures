var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var inkey = 0;
  var outkey = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[inkey++] = value;
  };

  someInstance.dequeue = function(value) {
    var returnResult = storage[outkey];
    if (outkey < inkey) {
      delete storage[outkey];
      outkey++;
    }
    return returnResult;
  };

  someInstance.size = function(value) {
    return inkey - outkey;
  };

  return someInstance;
};
