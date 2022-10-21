class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length == this.capacity) {
            throw new Error("Not enough space in the collection.");
        }
        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let book = this.books.find(p => p.bookName == bookName);
        if (book == undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (book.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }
        book.payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        let bookIndex = this.books.findIndex(p => p.bookName == bookName);
        if (bookIndex == -1) {
            throw new Error("The book, you're looking for, is not found.");
        }
        let book = this.books[bookIndex];
        if (!book.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        this.books.splice(bookIndex, 1);

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let sortedBook = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            let result = [];
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            sortedBook.map((b) => {
                let paid = b.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${b.bookName} == ${b.bookAuthor} - ${paid}.`);
            });
            return result.join('\n').trim();
        } else {
            let findBook = this.books.find(b => b.bookAuthor == bookAuthor);
            if (findBook) {
                let result = [];
                let paid = findBook.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${findBook.bookName} == ${findBook.bookAuthor} - ${paid}.`);
                return result.join('\n').trim();
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
        }
    }
}

