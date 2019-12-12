var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var inkey = 0;
  var outkey = 0;
  // Implement the methods below

  // storage = {},

  someInstance.enqueue = function(value) {
    if(inkey === undefined) {
      inkey = 0;
      outkey = 0;
    }
    storage[inkey] = value;
    inkey++;
  };

  someInstance.dequeue = function() {
    if(outkey === undefined) {
      return;
    }
    var returnResult = storage[outkey];
    delete storage[outkey];
    if(outkey < inkey) {
      outkey++;
    }
    return returnResult;
  };

  someInstance.size = function() {
    return inkey - outkey;
  };

  return someInstance;
};
