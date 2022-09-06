function parse(data) {
  const arr = [];
  let num = 0;
  const arrData = data.split('');
  console.log(arrData)
  arrData.forEach(el => { 
    if (el === "i") {
      num++;
    } else if (el === "d") {
      num--;
    } else if (el === "s") { 
      num = num ** 2; 
    } else if (el === "o") {
      arr.push(num);   
    }    
  }) 
  return arr;
}

console.log(parse("iiisdoso"));