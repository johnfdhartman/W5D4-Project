Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  const outArr = [];
  for (let i=0; i < this.length; i++) {
    outArr.push(callback(this[i]));
  }
  return outArr;
};

Array.prototype.myInject = function (callback, initial) {
  var accum = initial;
  for (let i=0; i < this.length; i++) {
    accum = callback(accum, this[i]);
  }
  return accum;
};
