function fibonacci(num) {
// your code here
  let value=0;
  let value2=1;
  let nval;
  for (let i=2; i<num; i++){
    nval = value+value2;
    value = value2
    value2=nval
  }
  return nval
}
console.log(fibonacci(3))

module.exports = fibonacci;
