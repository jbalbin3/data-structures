var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { // O(1) constant time complexity
  var child = {
    value: value,
    children: []
  };
  _.extend(child, treeMethods);
  this.children.push(child);
};

treeMethods.contains = function(target) { // O(n) linear time complexity
  var isFound = false;
  var checkTree = function(node) {
    if(!isFound) {
      if(node.value === target) {
        isFound = true;
        return;
      }
      for(var i = 0; i < node.children.length; i++) {
        checkTree(node.children[i]);
      }
    }
  };
  checkTree(this);
  return isFound;
};

treeMethods.traverse = function(callback) {
  var getNode = function(node) {
    callback(node.value);
    if(node.children.length){
      node.children.forEach(function(child) {
        callback(child.value);
        if(child.children.length) {
          getNode(child);
        }
      });
    }
  };
  getNode(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
