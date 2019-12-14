var BinarySearchTree = function(value) {
  var btree = Object.create(binaryTreeMethods);

  btree.value = value;
  btree.left = null;
  btree.right = null;

  return btree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  var setNode = function(node) {
    if(value > node.value) {
      if(node.right === null) {
        node.right = {
          value: value,
          left: null,
          right: null
        };
      } else {
        setNode(node.right);
      }
    } else {
      if(node.left === null) {
        node.left = {
          value: value,
          left: null,
          right: null
        };
      } else {
        setNode(node.left);
      }
    }
  };
  setNode(this);
};

binaryTreeMethods.contains = function(value) {
  var findNode = function(node) {
    if(node.value === value) { return true; }
    if(value > node.value) {
      if(node.right === null) {
        return false;
      } else {
        if(node.right.value === value) {
          return true;
        }
        return findNode(node.right);
      }
    } else {
      if (node.left === null) {
        return false;
      } else {
        if (node.left.value === value) {
          return true;
        }
        return findNode(node.left);
      }
    }
  };
  return findNode(this);
};

binaryTreeMethods.depthFirstLog = function(callback) {
  if(!callback) { callback = function(e) { return e; }; }
  var findNode = function(node) {
    callback(node.value);
    if (node.left !== null) {
      findNode(node.left);
    }
    if(node.right !== null) {
      findNode(node.right);
    }

  };
  findNode(this);
};
/*
var BinarySearchTree = function(root) {
  var btree = new bTree(root);

};
*/

/*
A .left property, a binary search tree (BST) where all values are lower than the current value.

 A .right property, a BST where all values are higher than the current value.

 A .insert() method, which accepts a value and places it in the tree in the correct position.

 A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.

 A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.

 What is the time complexity of the above functions?

Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
