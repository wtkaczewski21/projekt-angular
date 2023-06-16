import { Component, Input } from '@angular/core';
import { Book } from '../../../models/Book';
import { BookStoreService } from '../../../dom-service/store/book-store.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent {
    @Input() book: Book;

    constructor(private bookService: BookStoreService,
        private router: Router,
        private route: ActivatedRoute) {

    }

    onEditBook() {
        this.router.navigate(['edit/' + this.book.id], { relativeTo: this.route });
    }

    onDeleteBook() {
        this.bookService.deleteBook(this.book.id);
    }
}
