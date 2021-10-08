//a)
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(months[4], months[10]);

//b)
console.log(months.sort());

//c)
months.unshift("comienzoDeAño");
months.push("finDeAño");

console.log(months);

//d)
months.shift();
months.pop();

console.log(months);

//e)
console.log(months.reverse());

//f
console.log(months.join("-"));

//g
var slicedMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
 "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(slicedMonths.slice(4,11));
