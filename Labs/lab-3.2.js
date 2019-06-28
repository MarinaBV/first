function power(a, i) {
    a = parseInt(a);
    i = parseInt(i);
    if (!a || !i){
        return
    }
    let res=2;

    while (--i) {
        res *= a;
    }
    return res;
}
result = power(2, 10);
console.log(result);