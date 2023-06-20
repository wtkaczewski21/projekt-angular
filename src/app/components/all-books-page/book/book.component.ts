import { Component, Input } from '@angular/core';
import { Book } from '../../../models/Book';
import { BookStoreService } from '../../../dom-service/store/book-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent {
    @Input() book: Book;
    id: number

    constructor(private bookService: BookStoreService,
        private router: Router,
        private route: ActivatedRoute) {

    }

    favoritesToggle() {
        this.book.isFavorite ? this.book.isFavorite = false : this.book.isFavorite = true;
    }

    onEditBook() {
        this.router.navigate(['edit/' + this.book.id], { relativeTo: this.route });
    }

    onDeleteBook() {
        this.bookService.deleteBook(this.book.id);
    }
}
