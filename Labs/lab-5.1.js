
function findWord(search, str) {
    let index = str.indexOf(search);
    if (index === -1){
        return false;
    }
    let space = str.indexOf(' ', index);
    let subStr = str.slice(0, space);
    space = subStr.lastIndexOf(' ');
    let word = subStr.slice(space);
    word = word
        .replace(' ', '' )
        .replace(',', '')
        .replace('.', '');
return word;
}

let result = findWord('хром', 'Мы знаем, что монохромный цвет– это градации серого');
console.log(result);
