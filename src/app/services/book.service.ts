import { Subject } from 'rxjs';
import { Book } from '../models/Book';

export class BookService {
    private books: Array<Book> = [
        { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', imgUrl: 'https://m.media-amazon.com/images/I/71HbYElfY0L._AC_UF1000,1000_QL80_.jpg', isFavorite: true },
        { id: 2, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', imgUrl: 'https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg', isFavorite: true },
        { id: 3, title: 'Game of Thrones', author: 'George R.R. Martin', imgUrl: "https://s.lubimyczytac.pl/upload/books/137000/137192/352x500.jpg", isFavorite: false },
        { id: 4, title: 'The Dark Tower', author: 'Stephen King', imgUrl: "https://m.media-amazon.com/images/I/81qsxzC-fNL._AC_UF1000,1000_QL80_.jpg", isFavorite: false },
        { id: 5, title: 'The Chronicles of Narnia', author: 'C.S. Lewis', imgUrl: "https://g.christianbook.com/g/slideshow/9/98247/main/98247_1_ftc_dp.jpg", isFavorite: true },
        { id: 6, title: 'Prince of Thorns', author: 'Mark Lawrence', imgUrl: "https://cdn.shopify.com/s/files/1/2527/6884/products/lawrence-prince-of-thorns-10.jpg?v=1630430482", isFavorite: false },
    ]

    booksChanged = new Subject<Book[]>();
    bookId: number;

    getBooks() {
        return this.books.slice();

    }

    getBookById(id: number) {
        return this.books.find(book => book.id === id)
    }

    addBook(book: Omit<Book, 'id'>) {
        let autoId;
        const lastElement = this.books[this.books.length - 1];
        if (lastElement !== undefined) {
            autoId = lastElement.id + 1;
        }
        else {
            autoId = 1;
        }
        this.books.push({ ...book, id: autoId });
    }

    updateBook(id: number, newBook: Book) {
        let bookUpdate = this.books.findIndex(book => book.id === id);
        this.books[bookUpdate] = newBook;
    }

    deleteBook(id: number) {
        this.bookId = this.books.findIndex(book => book.id === id);
        this.books.splice(this.bookId, 1);
        this.booksChanged.next(this.books.slice());
    }
}