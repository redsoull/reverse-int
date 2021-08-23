module.exports = function reverse (n) {
  let num=Math.abs(n).toString();
  let result = '';
  for (let i = 0; i < num.length; i +=1) {
    result = `${num[i]}${result}`;
  }
  return result;
}
