const stringsToNum = array => {
  let numbers = array.map(ele => {
    return Number(ele);
  })
  return numbers;
}
console.log(stringsToNum(["1", "2","3", "4"]));
