

// Instantiate a new graph
var Graph = function() {
  this.v = [];
  this.e = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { // O(1) constant time complexity
  this.v.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { // O(n) linear time complexity
  for (var i = 0; i < this.v.length; i++) {
    if (this.v[i] === node) { return true; }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { // O(n) linear time complexity
  for(var i = 0; i < this.e.length; i++) {
    if (this.e[i].includes(node)) {
      this.e.splice(i, 1);
    }
  }
  var i = this.v.indexOf(node);
  this.v.splice(i, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { // O(n) linear time complexity
  for(var i = 0; i < this.e.length; i++) {
    if (this.e[i].includes(fromNode) && this.e[i].includes(toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // O(1) constant time complex
  this.e.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { // O(n) linear time complexity
  for(var i = 0; i < this.e.length; i++) {
    if (this.e[i].includes(fromNode) && this.e[i].includes(toNode)) {
      this.e.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { // O(n) linear time complexity
  for (var i = 0; i < this.v.length; i++) {
    cb.call(this, this.v[i]);
  }
};

Graph.prototype.countEdges = function(v) {
  var result = 0;
  for (var i = 0; i < this.e.length; i++) {
    if (this.e[i].includes(v)) {
      result++;
    }
  }
  return result;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


