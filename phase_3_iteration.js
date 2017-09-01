Array.prototype.bubbleSort = function () {
  var outArr = this;
  const sorted = false;
  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < (outArr.length - 1); i++) {
      if (outArr[i] > outArr[i + 1]) {
        sorted = false;
        const smallerVal = outArr[i+1];
        outArr[i+1] = outArr[i];
        outArr[i] = smallerVal;
      }
    }
  }
  return outArr;
};

String.prototype.substrings = function () {
  var substrings = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j >= i && j < this.length; j++) {
      substrings.push(this.slice(i,j));
    }
  }
  return substrings;
};
