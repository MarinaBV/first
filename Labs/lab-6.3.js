function getDate(str) {
    const dateParts = str.split('-');
    let date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    //console.log(date.toUTCString());
    console.log(date.toLocaleString());
}

getDate('25-02-2012');
getDate('25-2-2012');
getDate('01-12-2011');
getDate('2-12-197');
getDate('2-12-99');




function getDate(str) {
    let date = new Date(str.replace(/(\d+)-(\d+)-(\d+)/, '$3/$2/$1'));
    console.log(date.toUTCString());
}
getDate('25-02-2012');
getDate('25-2-2012');
getDate('01-12-2011');
getDate('2-12-197');
getDate('2-12-99');


// 25-02-2012
// 25-2-2012
// 01-12-2011
// 2-12-1978
// 2-12-99