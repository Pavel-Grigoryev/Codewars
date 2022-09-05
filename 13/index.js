function validatePIN(pin) {
  let valPin = pin.split('');
  console.log(valPin);
  console.log(valPin.length);
  if (valPin.length === 4 || valPin.length === 6) {
    console.log(valPin);
    const numsArr = valPin.filter(el => {
      if (el === "0" || +el) {
        return true;
      }
    }
    );
    if (numsArr.length === 4 && numsArr.length === valPin.length  || numsArr.length === 6 && numsArr.length === valPin.length) {
      return true;
    } else {
      return false;
    }
    console.log(numsArr);   
  } else {
    return false;
  }
   
}

/* 
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
*/

console.log(validatePIN("-1.234"));