
//  function greaterThan10(array) {
//   var newArray = array.filter(function(ele) {
//     if (ele > 10) {
//       return ele;
//     }
//   })
//   return newArray;
// }

const greaterThan10 = (array) => {
  let newArray = array.filter(ele => {
    if (ele > 10) {
      return ele;
    }
  })
  return newArray;
}
// console.log(greaterThan10([1,2,3,4,77,33,5,2]));
