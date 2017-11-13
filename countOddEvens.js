const countOddAndEven = array => {
  var obj = {evens: 0, odds: 0};

  array.map(ele => {
    if (ele % 2 === 0) {
      obj.evens++;
    } else {
      obj.odds++;
    }
  })
  return obj;
}
// console.log(countOddAndEven([1,2,3,4,5,6,7,8,9,10]));
