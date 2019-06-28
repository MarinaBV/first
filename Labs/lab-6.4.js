function getDate(str) {
    try {
        const dateParts = str.split('-');
        if(isNaN(parseInt(dateParts[2])) || dateParts[2].length !== 4 && dateParts[2].length !== 2){
           throw new Error('Неправильно указан год');
        }
        if(isNaN(parseInt(dateParts[1])) || parseInt(dateParts[1])>12 || parseInt(dateParts[1])<0){
            throw new Error('Неправильно указан месяц');
        }
        if(isNaN(parseInt(dateParts[0])) || parseInt(dateParts[0])>31 || parseInt(dateParts[0])<0){
            throw new Error('Неправильно указано число');
        }
        let date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
        return date.toUTCString();

    } catch (e) {
        return e.message;
    }
}

console.log(getDate('25-12-2012'));
console.log(getDate('25-2-2012'));
console.log(getDate('01-12-2011'));
console.log(getDate('2-12-1978'));
console.log(getDate('2-12-99'));