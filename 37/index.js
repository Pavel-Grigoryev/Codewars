function digitize(n) {
  let str = '';
  str += n;  
  const arr = str.split('').reverse();
  return arr.map(el => Number(el))    
}

console.log (digitize(1233))