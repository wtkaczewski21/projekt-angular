import { Component, Input } from '@angular/core';
import { Book } from '../../../models/Book';
import { BookService } from '../../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent {
    @Input() book: Book;
    id: number

    constructor(private bookService: BookService,
        private router: Router,
        private route: ActivatedRoute) {

    }

    favoritesToggle() {
        this.book.isFavorite ? this.book.isFavorite = false : this.book.isFavorite = true;
    }

    onBorrowBook() {
        this.router.navigate(['borrowings/new/' + this.book.id]);
    }

    onEditBook() {
        this.router.navigate(['edit/' + this.book.id], { relativeTo: this.route });
    }

    onDeleteBook() {
        this.bookService.deleteBook(this.book.id);
    }
}
