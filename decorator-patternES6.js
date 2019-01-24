class Book {
    constructor(title, author, price){
        this._title = title;
        this._author = author;
        this._price = price;
    }
    getDetails(){
        return `${this._title} by ${this._author}`;
    }
}

//Creata new Class acept object Book and return new Book with new attributes o functions

//Decorator 1

function giftWrap(book) {
    book.isGiftWrapped = true;
    book.unwrap = function() {
        return `Unwrapped ${book.getDetails()}`;
    };
    return book;
}

// decorator 2
function hardbindBook(book) {
    book.isHardbound = true;
    book._price += 5;
    return book;
}

// usage
const alchemist = giftWrap(new Book('The Alchemist', 'Paulo Coelho', 10));
const inferno = hardbindBook(new Book('Inferno', 'Dan Brown', 15));