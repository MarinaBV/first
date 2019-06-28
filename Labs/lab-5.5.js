let name = "Lennon,John\nMcCartney,Paul\nHarrison,George\nStar, Ringo";
let re = /(,)/g;
let str = name.replace(re, ' ');
let re2 = /(\w+)\s+(\w+)/g;
let finalStr = str.replace(re2, '$2 $1');
console.log(finalStr);

