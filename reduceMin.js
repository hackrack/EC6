// const reduceMin = array => {
//   let min = array.reduce((acc, curr) => {
//     console.log("acc", acc);
//       console.log("curr", curr);
//       console.log(array);
//   })
//   return min;
// }
// console.log(reduceMin([10, 0, 100, 1, -100, 20, 33]));

const reduceMin = (items) => {
  return items.reduce((accumulator, currentValue) => {
    return [Math.min(currentValue, accumulator[0]),];
  }, [Number.MIN_VALUE]);
}
 console.log(reduceMin([10, 0, 100, 1, -100, 20, 33]));
