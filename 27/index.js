function reverseWords(str) {
  const arr = str.split(' ');
 const revArr = arr.map(el => {
   return el.split('').reverse().join('');  
 })
  
  return revArr.join(' ');
}
