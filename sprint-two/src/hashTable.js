

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) { // initialize
    this._storage.set(index, [[k, v]]);
    this.checkAndResize();
  } else { // collision
    for (var i = 0; i < bucket.length; i++) {
      if (k === bucket[i][0]) {
        bucket[i][1] = v;
        this._storage.set(index, bucket);
        return;
      }
    }
    bucket.push([k, v]);
    this._storage.set(index, bucket);
    this.checkAndResize();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this._storage.set(index, bucket);
      this.checkAndResize();
      return;
    }
  }
};

HashTable.prototype.insertResize = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) { // initialize
    this._storage.set(index, [[k, v]]);
  } else { // collision
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.checkAndResize = function() {
  // get length of storage and calc percent
  // if greater than 75% double
  // save the original data
  // double
  // copy back into doubled?
  // if less than 25% shrink

  var amountVal = 0;
  this._storage.each(function(bucket){
    if (bucket !== undefined && bucket.length) { amountVal++; }
  });

  if (amountVal / this._limit > 0.75) {
    var temp = [];
    this._storage.each(function(bucket) {
      if (bucket !== undefined) {
        temp = temp.concat(bucket);
      }
    });
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    for (var i = 0; i < temp.length; i++) {
      this.insertResize(temp[i][0], temp[i][1]);
    }
  }
  console.log('bucket count ', amountVal);
  console.log('percent ', amountVal/this._limit);
  console.log('limit ', this._limit);
  if (amountVal / this._limit < 0.25 && this._limit > 8) {
    var temp = [];
    this._storage.each(function(bucket){
      if (bucket !== undefined) {
        temp = temp.concat(bucket);
      }
    });
    this._limit /= 2;
    this._storage = LimitedArray(this._limit);
    for (var i = 0; i < temp.length; i++) {
      this.insertResize(temp[i][0], temp[i][1]);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


