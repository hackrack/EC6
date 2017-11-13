const forEach2 = (array, cb) => {
  array.forEach(ele => {
    return cb(ele);
  })
};
forEach2([1,2,3,45,6,7,8], log)

function log(val) {
  console.log(val);
}
