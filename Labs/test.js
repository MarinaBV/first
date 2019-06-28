let data = [
    ['Pupkin', 25, 'admin', function () {
    }],
    ['Tanya', 40, 'moder', function () {
    }]
];

let roles = ['admin', 'moder', 'user'];
let arrObj = [];
for (let j = 0; j < data.length; j++) {
    arrObj[j] = {};
    for (let i = 0; i < data[j].length; i++) {
        if (typeof data[j][i] == 'number') {
            arrObj[j].age = data[j][i];
        } else if (typeof data[j][i] == 'string') {
            if (roles.includes(data[j][i])){
                arrObj[j].role = data[j][i];
            } else arrObj[j].name = data[j][i];
            // for (let k = 0; k < roles.length; k++) {
            //     if (data[j][i] === roles[k]) {
            //         arrObj[j].role = data[j][i];
            //         break;
            //     }
            //     else  arrObj[j].name = data[j][i];
            // }
        } else arrObj[j].meth = data[j][i];
    }
}
console.log(arrObj);