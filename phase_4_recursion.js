function range(start, end) {
  if (start === end) {
    return([end]);
  } else {
    const subArray = range(start, end-1);
    subArray.push(end);
    return subArray;
  }
}

function sumRec(nums) {
  if (nums.length === 1) {
    return nums[0];
  } else {
    return nums.pop + sumRec(nums);
  }
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * exponent(base, exp-1);
  }
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else if (exp % 2 === 0) {
    const exp1 = exponent(base, exp/2);
    return exp1 * exp1;
  } else  {
    const exp1 = exponent(base, (exp - 1)/2);
    return exp1 * exp1;
  }
}

function fibonacci(n) {
  if (n===1) {
    return [1];
  } else if (n===2) {
    return [1,1];
  } else {
    var prevFibs = fibonacci(n-1);
    const last = prevFibs[prevFibs.length - 1];
    const secondLast = prevFibs[prevFibs.length - 2];
    prevFibs.push(last + secondLast);
    return prevFibs;
  }
}
