function strPad(input, fullLen, fillStr, fillType) {
    if (!fillType) {
        let res = input;
        for (let i = input.length; i < (fullLen - input.length); i++) {
            res += fillStr;
        }
        return res.slice(0, fullLen)

    } else if (fillType === 'FILL_LEFT') {
        let res = '';
        for (let i = 0; i < (fullLen - input.length); i++) {
            res += fillStr;
        }
        if ((res + input).length > fullLen) {
            res = res.substr(0, (fullLen - input.length));
        }
        let res1 = res + input;
        return res1
    } else if (fillType === 'FILL_BOTH') {
        let res = '';
        for (let i = 0; i < fullLen - input.length; i++) {
            res += fillStr;
        }
        if (res.length % 2 === 0) {
            let res2 = res.substr(res.length / 2);
            let res3 = res2 + input + res2;
            return res3
        } else {
            let res2 = res.substr(parseInt[res.length/2]);
            console.log(res2);
            let res3 = res2 + input + res2.substr(0, res2.length - 1);
            return res3;
        }
    }


}

let result = strPad('star', 10, '-*-');
let result1 = strPad('star', 8, '-*-', 'FILL_LEFT');
let result2 = strPad('star', 8, '*', 'FILL_BOTH');

console.log(result);
console.log(result1);
console.log(result2);


