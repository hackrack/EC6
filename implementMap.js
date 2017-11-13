const mapped = (array, cb) => {
  let doubled = array.map(ele => {
    return double(ele);
  })
  return doubled;
}
// console.log(mapped([1,2,3,4,5,6,7,8]));
function double(num) {
  return num * 2;
}
