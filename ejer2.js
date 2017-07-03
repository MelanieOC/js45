var array = prompt('Array: ')
function pares(arr) {
  return arr.filter(function(value,index) {
    return index%2 == 0;
  })
}
function impares(arr) {
  return arr.filter(function(value,index) {
    return index%2 != 0;
  })
}

console.log('Pares: ' + pares(array));
console.log('Impares: ' + impares(array));
