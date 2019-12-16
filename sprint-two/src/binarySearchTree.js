var BinarySearchTree = function (value) {
  var btree = Object.create(binaryTreeMethods);

  btree.value = value;
  btree.left = null;
  btree.right = null;

  return btree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert2 = function (value) { // recursive version
  var setNode = function (node) {
    if (value > node.value) {
      if (node.right === null) {
        node.right = {
          value: value,
          left: null,
          right: null
        };
      } else {
        setNode(node.right);
      }
    } else {
      if (node.left === null) {
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

binaryTreeMethods.insert = function (value) { // non-recursive version
  var newNode = {
    value: value,
    left: null,
    right: null
  };
  var que = [this];
  do {
    var cur = que.shift();
    if (value < cur.value) {
      if (cur.left) {
        que.push(cur.left);
      } else {
        cur.left = newNode;
        return;
      }
    } else {
      if (cur.right) {
        que.push(cur.right);
      } else {
        cur.right = newNode;
        return;
      }
    }
  } while (que.length);
};

binaryTreeMethods.contains2 = function (value) { // recursive version
  var findNode = function (node) {
    if (node.value === value) {
      return true;
    }
    if (value > node.value) {
      if (!node.right) {
        return false;
      } else {
        if (node.right.value === value) {
          return true;
        }
        return findNode(node.right);
      }
    } else {
      if (!node.left) {
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

binaryTreeMethods.contains = function (value) { // non-recursive version
  var que = [this];
  do {
    var cur = que.shift();
    if (cur.value === value) {
      return true;
    }
    if (cur.left) {
      que.push(cur.left);
    }
    if (cur.right) {
      que.push(cur.right);
    }
  } while (que.length);
  return false;
};

binaryTreeMethods.depthFirstLog2 = function (callback) { // recursive version
  if (!callback) { callback = function (e) { return e; }; }
  var findNode = function (node) {
    callback(node.value);
    if (node.left !== null) {
      findNode(node.left);
    }
    if (node.right !== null) {
      findNode(node.right);
    }
  };
  findNode(this);
};

binaryTreeMethods.depthFirstLog = function (callback) { // non-recursive version
  var stack = [];
  cur = this;
  do {
    while (cur) {
      stack.push(cur);
      callback(cur.value);
      cur = cur.left;
    }
    if (cur || stack.length) {
      cur = stack.pop().right;
    } else {
      return;
    }
  } while (true);
};

binaryTreeMethods.breadthFirstLog2 = function (callback) { // recursive version
  // jumpRun func(node)
  // store node.value (or just run the callback)
  // check left if exists
  // push node.left to jumpArray
  // check right if exists
  // push node.right to jumpArray [e , g, l, a, c]
  // shift jumpArray = new node   (e = node)
  // call jumpStore func with input of new node
  // jumpRun(this)
  var que = [];
  var runQue = function (node) {
    callback(node.value);
    if (node.left) {
      que.push(node.left);
    }
    if (node.right) {
      que.push(node.right);
    }
    if (que.length) {
      runQue(que.shift());
    }
  };
  runQue(this);
};

binaryTreeMethods.breadthFirstLog = function (callback) { // non-recursive version
  var que = [this];
  do {
    var cur = que.shift();
    callback(cur.value);
    if (cur.left) {
      que.push(cur.left);
    }
    if (cur.right) {
      que.push(cur.right);
    }
  } while (que.length);
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
