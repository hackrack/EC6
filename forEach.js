const numbers = [1,2,3,4,5,6,7,8,9];
let mulBy2 = numbers.forEach((ele) => ele * 2);

numbers.forEach(ele => {
  console.log(ele);
});

// function mulBy2(array) {
//   let newArr = array.forEach(function(ele) {
//     return ele * 2;
//   })
//   return newArr;
// }
// console.log(mulBy2(numbers));
