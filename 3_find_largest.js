
function findLargest(arr) {
  if (!arr.length) return undefined; 
  return Math.max(...arr);
}


console.log(findLargest([3, 7, 2, 9, 5])); 
