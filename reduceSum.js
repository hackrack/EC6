const sum = array => {
  let total = array.reduce((acc, curr) => {
    return acc + curr;
  })
  return total;
}
// console.log(sum([1,2,3,4,5,6,7,8,9,10]));
