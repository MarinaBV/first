function animals(n) {
    let table = '';

    for (let animal = 0; animal < n * 6; animal++) {
        if (animal % 5 < 3) {
            table += 'dog ';
        } else {
            table += 'cat ';
        }

        if (animal % 6 === 5) {
            table += '\n';
        }
    }
    return table;
}

console.log(animals(7));
