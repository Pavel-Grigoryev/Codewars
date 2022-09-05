function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  const filtArr = [];
  if (Array.isArray(input)) {
    input.filter(el => {
      if (el > 0) {
        count++;
        console.log(count);
      } else if (el < 0) {
        sum += el;
        console.log(sum);
      } 
    });
  }
  
  if (count === 0 && sum === 0) {
    filtArr;
  } else {
    filtArr.push(count, sum);
  }

  return filtArr;
}

let testData = [1, "fdgfd"];

console.log(countPositivesSumNegatives(testData))