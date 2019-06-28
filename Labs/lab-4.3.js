let n = 10;
let fibs = [];
fibs[0] = 1;
for (let i=0; i<n; i++) {
    fibs[i+1] = fibs[i] + (fibs[i-1] || 0);
}

console.log(fibs);

