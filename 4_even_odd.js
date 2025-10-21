
function checkEvenOdd(num) {
  if (typeof num !== 'number' || !Number.isFinite(num)) return 'Not a valid number';
  return num % 2 === 0 ? 'Even' : 'Odd';
}


console.log(checkEvenOdd(5));
console.log(checkEvenOdd(8)); 
