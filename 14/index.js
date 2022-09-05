function stantonMeasure(arr) {
  let count = 0;
  let stan = 0;
  arr.forEach(el => {
    if (el === 1) {
      count++
    }
  })

  arr.forEach(el => {
    if (el === count) {
      stan++
    }
  })
  
  return stan;
}
  
console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]));
