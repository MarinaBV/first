function Book(title, pubYear, price) {
    this.title = title;
    this.pubYear = pubYear;
    this.price = price;
    this.show = function () {
        console.log(this.title, this.price)
    }
}

let Book2 = new Book('qwerty', 1999, 80);
Book2.show();
