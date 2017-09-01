Array.prototype.uniq = function (){
  var outArr = [];
  for (let i = 0; i < this.length; i++) {
    if (!outArr.includes(this[i])) {
      outArr.push(this[i]);
    }
  }
  return(outArr);
};

Array.prototype.two_sum = function (){
  var outArr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if (i !== j && this[i] + this[j] === 0) {
        outArr.push([i,j]);
      }
    }
  } return(outArr);
};

Array.prototype.transpose = function (){
  var column = new Array(this[0].length);
  var outArr = new Array(this.length);
  for (let i = 0; i < outArr.length; i++) {
    outArr.push(column);
  }
  for (let i = 0; i < outArr.length; i++) {
    for (let j = 0; j < outArr[0].length; i++) {
      outArr[i][j] = this[j][i];
    }
  }
  return outArr;
};
