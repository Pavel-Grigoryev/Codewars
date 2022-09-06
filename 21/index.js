function nbYear(p0, percent, aug, p) {
  let year = 1;
 
  let populNow = p0 + Math.floor((p0*percent)/100) + aug;
  while (populNow < p) {
    populNow = populNow + Math.floor((populNow * percent) / 100) + aug;
    console.log(populNow);
    year++;
  } 
  return year;
}

console.log(nbYear(1500000, 0.25, 1000, 2000000));