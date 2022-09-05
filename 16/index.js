String.prototype.toJadenCase = function () {
  str  = this.split(' ');

 const arrUpp = str.map((el) => {
   
   return el.replace(/^./, el[0].toUpperCase())   
 })
 return arrUpp.join(' ');
};