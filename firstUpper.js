const firstLetterUpperCase = sentence => {
  sentence = sentence.split(" ");
  let newSen = sentence.map(ele => {
    return ele[0].toUpperCase() + ele.slice(1);
  })
  return newSen.join(" ");
}
// console.log(firstLetterUpperCase("the quick brown fox"));
