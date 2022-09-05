function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.filter((item) => {
    if (item) {
      count++
    }
  });
  return count;
}

  

