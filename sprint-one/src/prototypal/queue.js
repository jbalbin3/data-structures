var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.inkey = 0;
  someInstance.outkey = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if (this.inkey === undefined) {
    this.inkey = 0;
    this.outkey = 0;
  }
  this.storage[this.inkey] = value;
  this.inkey++;
};

queueMethods.dequeue = function() {
  if (this.outkey === undefined) {
    return;
  }
  var returnResult = this.storage[this.outkey];
  delete this.storage[this.outkey];
  if (this.outkey < this.inkey) {
    this.outkey++;
  }
  return returnResult;
};

queueMethods.size = function() {
  return this.inkey - this.outkey;
};