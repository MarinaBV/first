function power(a, i) {
    let num = parseInt(a);
    let pwr = parseInt(i);
    if (typeof num !== 'number' || typeof pwr !== 'number') {
        throw new Error('a and i must be numbers');
    }

    /*if (pwr > 1) {
        return num * power(num, pwr - 1);
    }*/
    while (--pwr) {
        return num * power(num, pwr);
    }

    return num;
}

console.log(power(2, 3));


