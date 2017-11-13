const forEachSum = array => {
  let sum = 0;
  array.forEach(ele => {
    return sum += ele;
  });
  return sum;
}
// console.log(forEachSum([1,2,3,4,5,6,7,8,9,10]));
