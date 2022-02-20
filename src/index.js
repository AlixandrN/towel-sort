
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {return []}
  const l = matrix.length
  let arr = []
  for (let i = 0; i<l; i++) {
    if (i%2 === 0) {arr.push(matrix[i])}
    else {arr.push(matrix[i].reverse())}
  }
  let newArr = []
  for (let i=0; i<l; i++) {
    newArr = newArr.concat(arr[i])
  }
  return newArr
}