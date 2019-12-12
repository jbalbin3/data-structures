var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = {
    value: value,
    children: []
  };
  _.extend(child, treeMethods);
  this.children.push(child);
};

treeMethods.contains = function(target) {
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
