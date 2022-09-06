function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const strNew = str.toLowerCase().split('');
  let count = 0;
  strNew.forEach(el => {
    if (vowels.indexOf(el) != -1) {
      count++;
    }
  });
  console.log(strNew)
  return count;
}

/* Best practies

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
 */