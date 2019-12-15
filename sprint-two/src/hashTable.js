

var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) { // initial tuple
    this._storage.set(index, [[k, v]]);
    this._addCount(1);
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
    this._addCount(1);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      this._storage.set(index, bucket);
      this._addCount(-1);
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype._addCount = function(increment) {
  this._count += increment;
  var ratio = this._count / this._limit;
  if (increment === 1) {
    if (ratio > 0.75) { // check double expression
      this._Resize(this._limit * 2);
    }
  } else {
    if (ratio < 0.25 && this._limit > 8) { // check halve expression
      this._Resize(this._limit / 2);
    }
  }
};

HashTable.prototype._Resize = function(size) { // O(n) time complexity
  var temp = this._storage; // use temp to look at current storage
  this._limit = size;
  this._storage = LimitedArray(this._limit); // initialize storage to new size limit

  temp.each(function(bucket) { // load temp back into storage
    if (bucket) {
      for (var tuple of bucket) { // code review: is it better to use a traditional for loop here?
        this._ResizeInsert(tuple[0], tuple[1]);
      }
    }
  }.bind(this));
};

/* slimmer insert
 * no addCount(1), resize check, or bucket iteration
 */
HashTable.prototype._ResizeInsert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) { // initial tuple
    this._storage.set(index, [[k, v]]);
  } else { // collision
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


