var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var key = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[++key] = value;
  };

  someInstance.pop = function() {
    if (key > 0) {
      var returnVal = storage[key];
      delete storage[key];
      key--;
      return returnVal;
    }
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
