function printNumbers(num, col) {
    let rows = Math.ceil(num / col);
    let table = '';
    for (let row = 0; row < rows; row++) {
        for(let cols = 0; cols < col; cols++){
            let number = (row + (cols * rows));
            if(number > num){
                continue;
            }
            table += number + ' ';
        }
        table += '\n';
    }
    return table;
}


console.log(printNumbers(12, 3));