import { EventEmitter } from '@angular/core';
import { Book } from '../../models/Book';
import { Subject } from 'rxjs';

export class BookStoreService {
    private books: Book[] = [
        new Book(1, 'Harry Potter', 'J.K. Rowling', 'https://m.media-amazon.com/images/I/71HbYElfY0L._AC_UF1000,1000_QL80_.jpg'),
        new Book(2, 'The Lord of the Rings', 'J.R.R. Tolkien', 'https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg',),
        new Book(3, 'Game of Thrones', 'George R.R. Martin', "https://s.lubimyczytac.pl/upload/books/137000/137192/352x500.jpg"),
        new Book(4, 'The Dark Tower', 'Stephen King', "https://m.media-amazon.com/images/I/81qsxzC-fNL._AC_UF1000,1000_QL80_.jpg"),
        new Book(5, 'The Chronicles of Narnia', 'C.S. Lewis', "https://g.christianbook.com/g/slideshow/9/98247/main/98247_1_ftc_dp.jpg"),
        new Book(6, 'Prince of Thorns', 'Mark Lawrence', "https://cdn.shopify.com/s/files/1/2527/6884/products/lawrence-prince-of-thorns-10.jpg?v=1630430482"),
    ]

    booksChanged = new Subject<Book[]>();
    // startedEditing = new Subject<number>();
    bookId: number;

    getBooks() {
        return this.books.slice();

    }

    getBookById(id: number) {
        return this.books.find(book => book.id === id)
    }

    addBook(book: Book) {
        this.books.push(book);
    }

    deleteBook(id: number) {
        // this.books = this.books.filter(book => book.id !== id);
        this.bookId = this.books.findIndex((book) => book.id === id);
        this.books.splice(this.bookId, 1);
        this.booksChanged.next(this.books.slice());
    }
}