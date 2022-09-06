function invert(array) {
  if (array.length === 0) {
    return [];
  }
  
  return  array.map(el => el*(-1)); ;
}