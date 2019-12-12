var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {   // O(1) constant complexity
    if (list.head === null) { // no nodes
      list.head = list.tail = Node(value); // initialize head and tail
    } else {
      list.tail = list.tail.next = Node(value);
    }
  };

  list.removeHead = function() {        // O(1) constant complexity
    if (list.head.next !== null) {
      list.head = list.head.next;
    }
    return list.head.value;
  };

  list.contains = function(target) {    // O(n) linear complexity
    var current = list.head;
    while(current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
