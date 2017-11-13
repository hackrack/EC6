const filterEvens = array => {
  let newArray = array.filter(ele => {
    if (ele % 2 === 0) {
      return ele;
    }
  })
  return newArray;
}
// console.log(filterEvens([1,2,3,4,5,6,7,8,9,10]));
