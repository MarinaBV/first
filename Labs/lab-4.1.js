/*let book1 = {};

book1.title = 'aaaa';
book1.pubYea = '1999';
book1.price = 25;
book1.show = function(){
    console.log(this.pubYea);
    console.log(this.price);
};
book1.show();

console.log(book1.pubYea);
*/
function showBook() {
    console.log(this.pubYea);
    console.log(this.price);
}


let book2 = {
    title: 'aaaa',
    pubYea: '1999',
    price: 25,
    show : showBook,
};
 book2.show();




