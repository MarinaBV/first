let a = [5, 12];
let b = [];

a[99] = 7;
// for (let i=0; i<a.length; i++ ) {
//
//     b[i] = Math.pow(a[i],2);
// }

for(let i in a){

    b[i] = Math.pow(a[i],2);
}

console.log(b);
console.log(a);

