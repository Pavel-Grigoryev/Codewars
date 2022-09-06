function removeChar(str){
  const arr = str.split('');
  arr.pop(); 
  arr.shift();
  console.log(arr);
  return arr.join('');
};
 
/*
function removeChar(str) {
  return str.slice(1, -1);
}

*/

 