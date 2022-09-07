function inArray(array1, array2) {
  let result = array1.sort().filter(el => {
    let reg = new RegExp(`${el}`);
    console.log(reg)
    for (let i = 0; i < array2.length; i++) {
      console.log(reg.test(array2[i]))
      if (reg.test(array2[i])) {
        return true;
      }
    }
  
  });
  return result;
}
 
/* Best practices 
function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}
*/





