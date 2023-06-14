import { Component, Input } from '@angular/core';
import { Book } from '../../../models/Book';
import { BookStoreService } from '../../../dom-service/store/book-store.service';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
})
export class BookComponent {
    @Input() book: Book;
    id: number;

    constructor(private bookService: BookStoreService) {

    }

    // onDeleteBook() {
    //     this.bookService.deleteBook(this.id);
    // }
}
