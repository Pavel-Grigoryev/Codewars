let number = function (busStops) {
  let people = 0;
  busStops.forEach((el) => {
    for (let i = 0; i < el.length; i++) {
      if (i === 0) {
        people += el[i];
      } else {
        people -= el[i];
      }
    }
  });
  console.log(people);
  return people;
};

/* Best Practices
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
*/